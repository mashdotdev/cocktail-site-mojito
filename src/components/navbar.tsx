"use client";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { navLinks } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(
    () => {
      const navAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          // markers: true,
          scrub: 1,
        },
      });

      navAnimation.fromTo(
        "nav",
        { backgroundColor: "transparent" },
        {
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
          ease: "power1.inOut",
          duration: 1,
        }
      );
    },
    { dependencies: [] }
  );

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={20} height={20} />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
