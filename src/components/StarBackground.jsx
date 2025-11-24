import React, { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // Optional: update on window resize
    const handleResize = () => {
      generateStars();
      generateMeteors();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Switch glowing stars every 5 seconds (matching animation duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => {
        if (prevStars.length < 5) return prevStars;

        const newStars = prevStars.map((star) => ({ ...star, isGlowing: false, glowDelay: 0 }));

        const glowIndices = new Set();
        while (glowIndices.size < 5) {
          const randomIndex = Math.floor(Math.random() * newStars.length);
          glowIndices.add(randomIndex);
        }

        // Add staggered delays for smooth transition
        Array.from(glowIndices).forEach((index, i) => {
          newStars[index].isGlowing = true;
          newStars[index].glowDelay = i * 0.2; // 0.2s delay between each star
        });

        return newStars;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        isGlowing: false,
        glowDelay: 0,
      });
    }

    // Randomly select 5 stars to glow initially
    if (newStars.length >= 5) {
      const glowIndices = new Set();
      while (glowIndices.size < 5) {
        const randomIndex = Math.floor(Math.random() * newStars.length);
        glowIndices.add(randomIndex);
      }
      Array.from(glowIndices).forEach((index, i) => {
        newStars[index].isGlowing = true;
        newStars[index].glowDelay = i * 0.2;
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes glow {
          0% { 
            box-shadow: none;
          }
          25% {
            opacity: 0.8;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8),
                        0 0 20px 4px rgba(135, 206, 250, 0.6),
                        0 0 30px 6px rgba(135, 206, 250, 0.4);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 0 15px 3px rgba(255, 255, 255, 1),
                        0 0 30px 6px rgba(135, 206, 250, 0.8),
                        0 0 45px 9px rgba(135, 206, 250, 0.6);
          }
          75% {
            opacity: 0.8;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8),
                        0 0 20px 4px rgba(135, 206, 250, 0.6),
                        0 0 30px 6px rgba(135, 206, 250, 0.4);
          }
          100% {
            box-shadow: none;
          }
        }
        
        .star-glow {
          animation: glow 4s ease-in-out !important;
        }
      `}</style>

      {stars.map((star) => (
        <div
          key={star.id}
          className={star.isGlowing ? "star star-glow" : "star"}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}vh`,
            left: `${star.x}vw`,
            opacity: star.opacity,
            animationDuration: star.isGlowing ? "4s" : `${star.animationDuration}s`,
            animationDelay: star.isGlowing ? `${star.glowDelay}s` : "0s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 1}px`,
            top: `${meteor.y}vh`,
            left: `${meteor.x}vw`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
