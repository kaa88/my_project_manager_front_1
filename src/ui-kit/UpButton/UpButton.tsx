import {
  ComponentPropsWithoutRef,
  RefObject,
  memo,
  useEffect,
  useState,
} from "react";
import cn from "classnames";

import styles from "./UpButton.module.scss";

import { LAYOUT_TOP_ANCHOR, useScroll } from "../../features/ui";
import { Icon } from "../";

interface UpButtonProps extends ComponentPropsWithoutRef<"button"> {
  autoHide?: boolean;
  scrollableRef?: RefObject<any>;
  scrollBehavior?: ScrollBehavior;
  children?: undefined;
}

export const UpButton = memo(
  ({
    className,
    onClick,
    autoHide = true,
    scrollableRef,
    scrollBehavior,
    ...props
  }: UpButtonProps): JSX.Element | null => {
    const scroll = useScroll(LAYOUT_TOP_ANCHOR, scrollBehavior);
    const isAutoHiding = autoHide && scrollableRef !== undefined;
    const [isButtonVisible, setIsButtonVisible] = useState(!isAutoHiding);

    const checkContentSize = (): void => {
      setIsButtonVisible(
        !!scrollableRef?.current &&
          scrollableRef.current.clientHeight > window.innerHeight
      );
    };

    useEffect(() => {
      if (isAutoHiding) {
        checkContentSize();
        window.addEventListener("resize", checkContentSize);
      }
      return () => window.removeEventListener("resize", checkContentSize);
    }, []); // eslint-disable-line

    return !isButtonVisible ? null : (
      <button
        className={cn(className, styles._)}
        onClick={onClick || scroll}
        type="button"
        {...props}
      >
        <Icon className={styles.icon} name="arrow_square" />
      </button>
    );
  }
);
