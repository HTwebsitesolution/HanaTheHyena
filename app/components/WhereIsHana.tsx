"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Ballpit from "./Ballpit";
import Image from "next/image";

const HANA_SLOTS = 5; // how many horizontal positions Hana can hide in

const randomSlot = (current: number | null) => {
  let next = Math.floor(Math.random() * HANA_SLOTS);
  // avoid teleporting to the exact same slot if possible
  if (current !== null && HANA_SLOTS > 1) {
    while (next === current) {
      next = Math.floor(Math.random() * HANA_SLOTS);
    }
  }
  return next;
};

const WhereIsHana: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hanaSlot, setHanaSlot] = useState<number | null>(0);
  const [found, setFound] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // size of Hana's hit-area in % of container width/height
  const HANA_WIDTH_PCT = 0.22; // Slightly larger hit area for easier discovery
  const HANA_HEIGHT_PCT = 0.45; // Adjusted height

  // called whenever cursor moves over the game area
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || hanaSlot === null) return;

      const rect = containerRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const slotWidth = rect.width / HANA_SLOTS;
      const hanaCenterX = slotWidth * (hanaSlot + 0.5);
      const hanaWidth = rect.width * HANA_WIDTH_PCT;
      const hanaHeight = rect.height * HANA_HEIGHT_PCT;

      // Hana hides in the bottom portion of the container, deeper behind balls
      const hanaCenterY = rect.height * 0.82;

      const left = hanaCenterX - hanaWidth / 2;
      const right = hanaCenterX + hanaWidth / 2;
      const top = hanaCenterY - hanaHeight / 2;
      const bottom = hanaCenterY + hanaHeight / 2;

      const isInside =
        x >= left && x <= right &&
        y >= top && y <= bottom;

      if (isInside && !found) {
        setFound(true);
        setShowToast(true);

        // move Hana to a new hiding spot after 2.5 seconds (giving time to see her)
        setTimeout(() => {
          setHanaSlot((current) => randomSlot(current));
          setFound(false);
        }, 2500);

        // hide toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    },
    [found, hanaSlot]
  );

  // if you ever want Hana to start in a random place on mount
  useEffect(() => {
    setHanaSlot(randomSlot(null));
  }, []);

  return (
    <section
      aria-labelledby="where-is-hana-heading"
      className="py-16 sm:py-20 bg-gradient-to-b from-sky-900 via-sky-950 to-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            id="where-is-hana-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Where is Hana?
          </h2>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
            Move your mouse (or finger) around the ball pit to see if you can
            find Hana the Hyena hiding behind the bouncing balls.
          </p>
        </div>

        {/* Toast */}
        <div className="relative mb-4 h-8">
          {showToast && (
            <div className="absolute left-1/2 -translate-x-1/2 z-20">
              <div className="px-4 py-2 rounded-full bg-emerald-500 shadow-lg text-white text-sm sm:text-base font-semibold animate-bounce">
                🎉 You found Hana!
              </div>
            </div>
          )}
        </div>

        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/60 border border-slate-800"
          style={{ minHeight: 260, maxHeight: 320 }}
          onMouseMove={handleMouseMove}
          onTouchMove={(e) => {
            if (e.touches?.[0]) {
              const touch = e.touches[0];
              // synthesize a MouseEvent-like object for reuse
              handleMouseMove({
                ...e,
                clientX: touch.clientX,
                clientY: touch.clientY
              } as unknown as React.MouseEvent<HTMLDivElement>);
            }
          }}
        >
          {/* Ballpit canvas - must be on top to cover Hana */}
          <div 
            className="absolute inset-0 z-10 transition-opacity duration-300"
            style={{ opacity: found ? 0.3 : 1.0 }}
          >
            <Ballpit
              count={880}
              gravity={0.7}
              friction={0.8}
              wallBounce={0.96}
              followCursor={true}
            />
          </div>

          {/* Hana illustration – hidden behind balls, visible when found */}
          {hanaSlot !== null && (
            <div
              className="absolute pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: `${(100 / HANA_SLOTS) * hanaSlot + 50 / HANA_SLOTS - (HANA_WIDTH_PCT * 50)}%`,
                width: `${HANA_WIDTH_PCT * 100}%`,
                transform: "translateX(-50%)",
                bottom: "5%", // Position her at the bottom, deep in the ball pit
                zIndex: found ? 20 : 0, // Bring to front when found
                opacity: found ? 1.0 : 0.05, // Fully visible when found
              }}
            >
              <div className="relative w-full" style={{ transform: "scale(0.9)" }}>
                <Image
                  src="/HanaTheHyena website inside logo.png"
                  alt="Hana hiding behind the balls"
                  width={280}
                  height={280}
                  className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
                  priority={false}
                  style={{ 
                    filter: found ? "brightness(1.1) contrast(1.1)" : "brightness(0.5) contrast(0.8)",
                    mixBlendMode: found ? "normal" : "multiply",
                    transition: "filter 0.3s ease-out"
                  }}
                />
              </div>
            </div>
          )}

          {/* Overlay instructions at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-center">
            <div className="px-4 py-2 rounded-full bg-slate-900/75 backdrop-blur text-xs sm:text-sm text-slate-100 border border-slate-700">
              👀 Tip: move your mouse slowly… Hana keeps hiding behind the
              biggest pile of balls!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereIsHana;
