import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const useAnimatedNavigate = () => {
  const navigate = useNavigate();

  const animatedNavigate = useCallback(
    (target, exitRefs, entryRefs) => {
      const tl = gsap.timeline({
        onComplete: () => {
          navigate(target);

          entryRefs.forEach(ref => {
            gsap.fromTo(ref.current,
              { opacity: 0, x: 50 },
              { opacity: 1, x: 0, duration: 1 }
            );
          }); 
        }
      });
      
      exitRefs.forEach(ref => {
        if (ref.current) {
          tl.to(ref.current,
            { opacity: 0, x: -50, duration: 0.5 },
            "-=0.3"
          );
        }
      });
    },
    [navigate]
  );

  return animatedNavigate;
};