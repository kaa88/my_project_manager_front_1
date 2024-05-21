import {
  useLayoutEffect,
  memo,
  ComponentPropsWithoutRef,
  useState,
  useRef,
  RefObject,
} from "react";
import { createPortal } from "react-dom";
import { CgClose as DefaultIcon } from "react-icons/cg";
import cn from "classnames";
import styles from "./BasicModal.module.scss";
import { getCssVariable } from "../../utils/utils";
import { transitionIsLocked } from "../../utils/transitionLock";

export interface BasicModalProps extends ComponentPropsWithoutRef<"div"> {
  active: boolean;
  onClose: () => void;
  onOpen?: () => void;
  focusedElementRef?: RefObject<any>;
  backdropClose?: boolean;
  backdropClassName?: string;
  contentWrapperClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  closeButtonIcon?: JSX.Element;
}

let timeout: number | undefined;
let timeoutId: NodeJS.Timeout | undefined;

const containerEl = document.body;

const rootEl = document.getElementById("root");
const focusDelay = 100;

export const BasicModal = memo(
  ({
    className,
    children,
    active,
    onClose,
    onOpen,
    focusedElementRef,
    backdropClose = true,
    backdropClassName,
    contentWrapperClassName,
    contentClassName,
    closeButtonClassName,
    closeButtonIcon,
  }: BasicModalProps) => {
    if (timeout === undefined) timeout = getCssVariable("timer-modal") * 1000;

    const [mounted, setMounted] = useState(active);
    const focusRef = useRef<HTMLDivElement>(null);

    const openModal = (): void => {
      setMounted(true);
      transitionIsLocked(timeout); // locking transition
      clearTimeout(timeoutId);

      const bodyPadding = parseFloat(
        window.getComputedStyle(document.body).paddingRight
      );
      const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
      document.body.style.paddingRight = bodyPadding + scrollbarWidth + "px";
      document.body.style.overflow = "hidden";

      rootEl?.setAttribute("inert", "true"); // setting focus trap
      setTimeout(() => {
        if (focusedElementRef?.current?.focus)
          focusedElementRef.current.focus();
        else focusRef.current?.focus();
      }, focusDelay);

      if (onOpen) onOpen();
    };
    const closeModal = (): void => {
      if (transitionIsLocked(timeout)) return;
      onClose();
      timeoutId = setTimeout(() => {
        setMounted(false);
        document.body.removeAttribute("style");
        rootEl?.removeAttribute("inert");
      }, timeout);
    };

    useLayoutEffect(() => {
      active ? openModal() : closeModal();
    }, [active]);

    if (!containerEl) {
      console.error("Modal container not found");
      return null;
    }

    const modal = (
      <div className={cn(className, styles._, { [styles.active]: active })}>
        {mounted && (
          <>
            <div
              className={cn(backdropClassName, styles.backdrop)}
              onClick={() => backdropClose && onClose()}
            />
            <div className={cn(contentWrapperClassName, styles.wrapper)}>
              <button
                className={cn(closeButtonClassName, styles.closeButton)}
                onClick={onClose}
                type="button"
              >
                {closeButtonIcon || <DefaultIcon />}
              </button>
              <div
                className={cn(contentClassName, styles.content)}
                tabIndex={1}
                ref={focusRef}
              >
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    );

    return createPortal(modal, containerEl);
  }
);
