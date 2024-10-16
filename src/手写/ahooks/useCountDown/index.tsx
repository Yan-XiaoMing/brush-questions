import { useEffect, useMemo, useRef, useState } from "react";

export interface Options {
  leftTime?: number;
  targetDate?: string;
  interval?: number;
  onEnd?: () => void;
}

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const calcLeftTime = (target) => {
  if (!target) {
    return 0;
  }
  const left = Date.parse(target) - Date.now();
  return left > 0 ? left : 0;
};

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

const useCountDown = (options: Options = {}) => {
  const { leftTime, targetDate, interval, onEnd } = options;

  const [leftTimeState, setLeftTimeState] = useState(() =>
    calcLeftTime(leftTime)
  );

  const onEndRef = useRef(onEnd);

  const target = useMemo(() => {
    if ("leftTime" in options) {
      return typeof leftTime === "number" && leftTime > 0
        ? Date.now() + leftTime
        : undefined;
    }
    return targetDate ? Date.parse(targetDate) : undefined;
  }, [leftTime, targetDate]);

  useEffect(() => {
    if (!target) {
      setLeftTimeState(0);
      return;
    }

    setLeftTimeState(calcLeftTime(target));

    const timer = setInterval(() => {
      const targetLeft = calcLeftTime(target);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedRes = useMemo(() => parseMs(leftTimeState), [leftTimeState]);

  return [leftTimeState, formattedRes] as const;
};
