"use client";

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

const Hero = () => {
  useGSAP(
    () => {
      const heroAnimationTl = gsap.timeline();
      const elementsAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          //   markers: true,
        },
      });

      const heroTitleSplit = SplitText.create(".title", {
        type: "chars, words",
      });

      const paraSplit = SplitText.create(".subtitle", {
        type: "lines",
      });

      heroTitleSplit.chars.forEach((char) =>
        char.classList.add("text-gradient")
      );

      heroAnimationTl
        .from(heroTitleSplit.chars, {
          yPercent: 100,
          ease: "expo.out",
          duration: 1.8,
          stagger: 0.05,
        })
        .from(paraSplit.lines, {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        });

      elementsAnimationTimeline
        .to(
          ".right-leaf",
          {
            y: 200,
          },
          0
        )
        .to(
          ".left-leaf",
          {
            y: -200,
          },
          0
        );
    },
    { dependencies: [] }
  );

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image
          src={"/images/hero-left-leaf.png"}
          alt="left-leaf"
          height={461}
          width={266}
          className="left-leaf"
        />
        <Image
          src={"/images/hero-right-leaf.png"}
          alt="right-leaf"
          height={461}
          width={266}
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses
              </p>
              <Link href="#cocktails">View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
