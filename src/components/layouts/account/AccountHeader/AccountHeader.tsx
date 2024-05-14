import styles from "./AccountHeader.module.scss";

import { Logo } from "../../../ui/Logo/Logo";

export const AccountHeader = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
};
