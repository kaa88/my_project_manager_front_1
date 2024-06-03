import styles from "./Modal.module.scss";
import { memo } from "react";

import { BasicModalProps, BasicModal } from "../BasicModal/BasicModal";

interface ModalProps extends BasicModalProps {}

export const Modal = memo(({ children, ...props }: ModalProps) => {
  return (
    <BasicModal
      backdropClassName={styles.back}
      contentWrapperClassName={styles.wrapper}
      contentClassName={styles.content}
      closeButtonClassName={styles.closeBtn}
      {...props}
    >
      {children}
    </BasicModal>
  );
});
