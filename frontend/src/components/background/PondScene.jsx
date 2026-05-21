
import { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/bg2.png"
import { sprites, preloadSprites } from "../../utils/preloadSprite";

const MODE_SPRITES = {
  idle: [0, 2, 3],
  work: [0, 4, 5],
  break: [0, 6, 7],
  pause: [0, 8, 9],
};

export default function PondScene({ mode }) {
  const [currentSprite, setCurrentSprite] = useState(0);
  const currentPoseRef = useRef(0);

  useEffect(() => {
    preloadSprites();
  }, []);

  useEffect(() => {
    let alive = true;
    let poseTimer;
    let blinkTimer;

    const pickPose = () => {
      const pool = MODE_SPRITES[mode] || MODE_SPRITES.idle;
      return pool[Math.floor(Math.random() * pool.length)];
    };

    const blink = () => {
      if (!alive || currentPoseRef.current !== 0) return;
      setCurrentSprite(1);
      setTimeout(() => {
        if (!alive) return;
        setCurrentSprite(0);
      }, 100);
    };

    const scheduleBlink = () => {
      const delay = 4000 + Math.random() * 3000;
      blinkTimer = setTimeout(() => {
        if (!alive) return;
        blink();
        scheduleBlink();
      }, delay);
    };

    const schedulePoseChange = () => {
      const delay = 30000 + Math.random() * 60000;
      poseTimer = setTimeout(() => {
        if (!alive) return;
        const next = pickPose();
        currentPoseRef.current = next;
        setCurrentSprite(next);
        schedulePoseChange();
      }, delay);
    };

    currentPoseRef.current = 0;
    const initTimer = setTimeout(() => {
      if (alive) setCurrentSprite(0);
    }, 0);

    scheduleBlink();
    schedulePoseChange();

    return () => {
      alive = false;
      clearTimeout(poseTimer);
      clearTimeout(blinkTimer);
      clearTimeout(initTimer);
    };
  }, [mode]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          src={sprites[currentSprite]}
          alt=""
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-[58%]
            -translate-y-[45%]

            w-[8vw]
            min-w-[120px]
            max-w-[220px]

            transition-all
            duration-500
            ease-in-out

            animate-[float_5s_ease-in-out_infinite]
          "
        />
      </div>
    </>
  )
}