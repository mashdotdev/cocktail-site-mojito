import fs from "fs";
import path from "path";

// #region agent log helper
const SERVER_ENDPOINT =
  "http://127.0.0.1:7243/ingest/6a348706-e912-4194-bdbd-fd73b435e068";

const emitLog = (payload) => {
  fetch(SERVER_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      timestamp: Date.now(),
      ...payload,
    }),
  }).catch(() => {});
};
// #endregion

// #region agent log H1/H2: analyze globals.css at-rule order
(() => {
  const globalsPath = path.join(process.cwd(), "src/app/globals.css");
  try {
    const raw = fs.readFileSync(globalsPath, "utf8");
    const lines = raw.split(/\r?\n/);
    const importLines = [];
    let firstNonImportIndex = -1;
    lines.forEach((line, idx) => {
      const t = line.trim();
      if (t.startsWith("@import")) importLines.push(idx + 1);
      if (
        firstNonImportIndex === -1 &&
        t.length > 0 &&
        !t.startsWith("@import") &&
        !t.startsWith("@charset") &&
        !t.startsWith("@layer")
      ) {
        firstNonImportIndex = idx + 1;
      }
    });
    emitLog({
      hypothesisId: "H1",
      location: "postcss.config.mjs:26",
      message: "globals.css import positions",
      data: {
        importLines,
        firstNonImportIndex,
      },
    });
    const importsBeforeOthers =
      firstNonImportIndex === -1 ||
      (importLines.length > 0 &&
        importLines.every((l) => l < firstNonImportIndex));
    emitLog({
      hypothesisId: "H2",
      location: "postcss.config.mjs:35",
      message: "imports before other at-rules",
      data: { importsBeforeOthers },
    });
  } catch (error) {
    emitLog({
      hypothesisId: "H3",
      location: "postcss.config.mjs:43",
      message: "failed to read globals.css",
      data: { error: String(error) },
    });
  }
})();
// #endregion

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
