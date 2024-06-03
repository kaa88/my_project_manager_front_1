import styles from "./BurgerMenu.module.scss";
import { memo } from "react";

import { BasicModal, BasicModalProps } from "../../kit";

interface BurgerMenuProps extends BasicModalProps {}

export const BurgerMenu = memo(({ children, ...props }: BurgerMenuProps) => {
  return (
    <BasicModal
      className={styles.mainContainer}
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
