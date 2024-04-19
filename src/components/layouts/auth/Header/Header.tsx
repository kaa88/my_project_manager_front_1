import styles from './Header.module.scss';

import Logo from 'components/ui/Logo/Logo';

export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
};
