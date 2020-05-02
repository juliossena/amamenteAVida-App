import { useRef, useState } from 'react';
import { Animated } from 'react-native';

function useHorizontalSteps(stepWidth) {
  const [step, setStep] = useState(0);
  const scroll = useRef(new Animated.Value(0));

  function scrollTo(index) {
    scroll.current.scrollTo({
      x: index * stepWidth,
      y: 0,
      animated: true,
    });
  }

  function nextStep() {
    setStep((prev) => {
      const next = prev + 1;

      scrollTo(next);
      return next;
    });
  }

  function previousStep() {
    setStep((prev) => {
      const next = Math.max(prev - 1, 0);

      scrollTo(next);
      return next;
    });
  }

  function currentStep() {
    return step + 1;
  }

  return {
    ref: scroll, currentStep, previousStep, nextStep,
  };
}

export default useHorizontalSteps;
