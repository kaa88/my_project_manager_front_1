import { ComponentProps } from "react";

import styles from "./ErrorPage.module.scss";

// import { AccountLayout } from "../../layouts/account/AccountLayout/AccountLayout";
// import { AuthLayout } from "../../layouts/auth/AuthLayout/AuthLayout";

type ErrorPageProps = {
  errorCode?: number;
};

export const ErrorPage = ({ errorCode }: ErrorPageProps): JSX.Element => {
  const isLogin = false;
  // const { isLogin } = useAppSelector(state => state.auth.auth);

  const getTitle = (): string => {
    return "";
    // return errorCode === ERROR_NOT_FOUND
    //   ? 'Страница не найдена'
    //   : 'Внутренняя ошибка сервера';
  };

  const getSubtitle = (): string => {
    return "";
    // return errorCode === ERROR_NOT_FOUND
    //   ? 'Возможно, вы перешли по ссылке, в которой была допущена ошибка, или ресурс был удален. Попробуйте перейти на главную страницу или посмотрите наши дополнительные ресурсы.'
    //   : 'Наши специалисты уже работают над устранением проблемы. Попробуйте повторить запрос через некоторое время. Приносим извинения за доставленные неудобства.';
  };

  const getImage = (): string => {
    return "";
    // return errorCode === ERROR_NOT_FOUND ? error404 : error500;
  };

  const handleRefresh = (): void => {
    window.location.reload();
  };

  const content = (
    <div className={styles.wrapper}>
      ErrorPage
      {/* <div className={styles.content}>
        <h1>{getTitle()}</h1>
        <p className={styles.description}>{getSubtitle()}</p>
        <nav className={styles.nav}>
          {errorCode === ERROR_NOT_FOUND ? (
            <Button
              className={styles.primaryBtn}
              href={pages.root}
              data-testid="submitButton"
            >
              Вернуться на главную
            </Button>
          ) : (
            <Button className={styles.primaryBtn} onClick={handleRefresh}>
              Обновить страницу
            </Button>
          )}
          <Button
            className={styles.desktopOnly}
            variant="link"
            href={links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Подписаться на телеграм
          </Button>
          <Button
            className={styles.desktopOnly}
            variant="link"
            href={links.vc}
            target="_blank"
            rel="noreferrer"
          >
            Перейти в блог
          </Button>
          <Button variant="link" href={links.help} target="_blank" rel="noreferrer">
            Получить помощь
          </Button>
        </nav>
      </div>
      <div className={styles.picture}>
        <img src={getImage()} alt="Error-picture" />
      </div> */}
    </div>
  );
  return content; //

  // return isLogin ? (
  //   <AccountLayout>{content}</AccountLayout>
  // ) : (
  //   <AuthLayout variant="error">{content}</AuthLayout>
  // );
};
