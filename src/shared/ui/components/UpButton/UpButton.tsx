import styles from "./UpButton.module.scss";
import {
  ComponentPropsWithoutRef,
  RefObject,
  memo,
  useEffect,
  useState,
} from "react";
import cn from "classnames";

import { debounce } from "../../../utils";

import { Icon } from "../Icon/Icon";

const defaultThreshold = 200;

interface UpButtonProps extends ComponentPropsWithoutRef<"button"> {
  scrollBehavior?: ScrollBehavior;
  scrollableRef?: RefObject<any>;
  autoHide?: boolean;
  threshold?: number;
  refreshTrigger?: any;
}

/**
 * Scrolls page to top
 * @param scrollBehavior native scroll behavior
 * @param scrollableRef if provided, will cause button to auto hide when content height is less than window height
 * @param autoHide enable auto hide (overrides scrollableRef param)
 * @param threshold increases scroll height of auto hide trigger (default 200px)
 * @param refreshTrigger any type of data (eg. pending state) that changes and triggers auto hide to recalc
 */

export const UpButton = memo(
  ({
    className,
    onClick,
    autoHide = true,
    scrollableRef,
    scrollBehavior,
    threshold = defaultThreshold,
    refreshTrigger,
    ...props
  }: UpButtonProps): JSX.Element | null => {
    const isAutoHiding = autoHide && scrollableRef !== undefined;
    const [isButtonVisible, setIsButtonVisible] = useState(!isAutoHiding);

    const scroll = (): void =>
      window.scrollTo({ top: 0, behavior: scrollBehavior });

    const checkContentSize = (): void => {
      setIsButtonVisible(
        !!scrollableRef?.current &&
          scrollableRef.current.clientHeight > window.innerHeight + threshold
      );
    };

    useEffect(() => {
      if (isAutoHiding) {
        checkContentSize();
        window.addEventListener("resize", debounce(checkContentSize));
      }
      return () =>
        window.removeEventListener("resize", debounce(checkContentSize));
    }, []); // eslint-disable-line

    useEffect(() => {
      debounce(checkContentSize)();
    }, [refreshTrigger]); // eslint-disable-line

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
