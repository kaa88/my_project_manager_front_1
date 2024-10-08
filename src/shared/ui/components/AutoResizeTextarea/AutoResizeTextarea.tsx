import styles from "./AutoResizeTextarea.module.scss";
import { ComponentProps, useLayoutEffect, useState, useRef, memo } from "react";
import cn from "classnames";

interface AutoResizeTextareaProps extends ComponentProps<"textarea"> {
  wrapperClassName?: string;
}

const CSS_HEIGHT = "--basic-height";

export const AutoResizeTextarea = memo(
  ({
    value = "",
    wrapperClassName,
    className,
    ...props
  }: AutoResizeTextareaProps) => {
    const [basicHeight, setBasicHeight] = useState(0);
    const [currentHeight, setCurrentHeight] = useState(0);
    const [borders, setBorders] = useState(0);
    const fakeElRef = useRef<HTMLTextAreaElement>(null);

    useLayoutEffect(() => {
      let height = 0;
      let borderTopWidth = 0;
      let borderBottomWidth = 0;
      const fakeEl = fakeElRef.current;
      if (fakeEl) {
        const style = getComputedStyle(fakeEl);
        height = parseFloat(style.getPropertyValue(CSS_HEIGHT));
        borderTopWidth = parseFloat(style.borderTopWidth);
        borderBottomWidth = parseFloat(style.borderBottomWidth);
      }
      setBasicHeight(height);
      setCurrentHeight(height);
      setBorders(borderTopWidth + borderBottomWidth);

      window.addEventListener("resize", calcHeight);
      return () => window.removeEventListener("resize", calcHeight);
    }, []); // eslint-disable-line

    useLayoutEffect(() => {
      calcHeight();
    });

    const calcHeight = (): void => {
      const fakeEl = fakeElRef.current;
      if (fakeEl && fakeEl.scrollHeight + borders !== currentHeight)
        setCurrentHeight(fakeEl.scrollHeight + borders);
    };

    return (
      <div className={cn(wrapperClassName, styles.wrapper)}>
        <textarea
          className={cn(className, styles.input)}
          style={{ height: currentHeight + "px" }}
          value={value}
          {...props}
        />
        <textarea
          className={cn(className, styles.fakeInput)}
          style={{ height: basicHeight + "px" }}
          value={value}
          ref={fakeElRef}
          tabIndex={-1}
          readOnly
        />
      </div>
    );
  }
);
