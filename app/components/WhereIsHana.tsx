"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Ballpit from "./Ballpit";
import Image from "next/image";

interface HanaPosition {
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
}

const randomPosition = (): HanaPosition => {
  // Generate random position with padding to keep Hana visible
  // X: 10% to 90% (avoid edges)
  // Y: 15% to 85% (avoid top/bottom edges, but allow all vertical positions)
  return {
    x: Math.random() * 80 + 10, // 10% to 90%
    y: Math.random() * 70 + 15, // 15% to 85%
  };
};

const WhereIsHana: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hanaPosition, setHanaPosition] = useState<HanaPosition | null>(null);
  const [found, setFound] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // size of Hana's hit-area in % of container width/height - smaller for more challenge
  const HANA_WIDTH_PCT = 0.12; // Smaller hit area for more challenge
  const HANA_HEIGHT_PCT = 0.25; // Reduced height for more precision needed

  // Throttle detection to prevent too frequent triggers
  const lastCheckRef = useRef<number>(0);
  const THROTTLE_MS = 100; // Only check every 100ms

  // called whenever cursor moves over the game area
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || hanaPosition === null || found) return;

      // Throttle the detection
      const now = Date.now();
      if (now - lastCheckRef.current < THROTTLE_MS) return;
      lastCheckRef.current = now;

      const rect = containerRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Calculate Hana's position in pixels based on percentage
      const hanaCenterX = (rect.width * hanaPosition.x) / 100;
      const hanaCenterY = (rect.height * hanaPosition.y) / 100;
      const hanaWidth = rect.width * HANA_WIDTH_PCT;
      const hanaHeight = rect.height * HANA_HEIGHT_PCT;

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
          setHanaPosition(randomPosition());
          setFound(false);
          lastCheckRef.current = 0; // Reset throttle after finding
        }, 2500);

        // hide toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    },
    [found, hanaPosition]
  );

  // Initialize Hana in a random position on mount
  useEffect(() => {
    setHanaPosition(randomPosition());
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

        {/* Tip statement above the ball pit */}
        <div className="mb-3 flex items-center justify-center">
          <div className="px-4 py-2 rounded-full bg-slate-900/75 backdrop-blur text-xs sm:text-sm text-slate-100 border border-slate-700">
            👀 Tip: move your mouse slowly… Hana keeps hiding behind the
            biggest pile of balls!
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/60 border border-slate-800"
          style={{ minHeight: 260, maxHeight: 320 }}
          onMouseMove={handleMouseMove}
          onTouchMove={(e) => {
            // Don't prevent default - allow scrolling
            // Only handle touch if it's a single touch and user is moving slowly (interacting, not scrolling)
            if (e.touches?.length === 1) {
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
            className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-auto"
            style={{ 
              opacity: found ? 0.3 : 1.0,
              touchAction: 'pan-y'
            }}
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
          {hanaPosition !== null && (
            <div
              className="absolute pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: `${hanaPosition.x}%`,
                top: `${hanaPosition.y}%`,
                width: `${HANA_WIDTH_PCT * 100}%`,
                transform: "translate(-50%, -50%)", // Center on the position point
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
        </div>
      </div>
    </section>
  );
};

export default WhereIsHana;
