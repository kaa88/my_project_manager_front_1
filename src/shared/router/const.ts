export const LINK = {
  // в ед числе... и св-ва в lowercase
  email: "info@example.com",
  vk: "https://vk.com",
  vc: "https://vc.ru",
  telegram: "https://t.me/kaa021088",
};

export const PAGE = {
  root: "/",
  error: "/error",
  // auth layout:
  login: "/login",
  register: "/register",
  resetPassword: "/reset-password",
  // account layout:
  profile: "/profile",
  changePassword: "/change-password",
  confirmEmail: "/confirm-email",
  board: "/board",
  boardSettings: "/board/settings",
  boardList: "/board/list",
  taskList: "/tasklist",
  task: "/task",
  tutorial: "/tutorial",
  wiki: "/wiki",
  calendar: "/calendar",
};

export const PAGE_NAME: typeof PAGE = {
  root: "",
  error: "Ошибка",
  // auth layout:
  login: "Вход",
  register: "Регистрация",
  resetPassword: "Сброс пароля",
  // account layout:
  profile: "Мой профиль",
  changePassword: "Смена пароля",
  confirmEmail: "Подтверждение email",
  board: "Доска",
  boardSettings: "Настройки доски",
  boardList: "Список досок",
  taskList: "Список задач",
  task: "Задачи",
  tutorial: "/tutorial",
  wiki: "/wiki",
  calendar: "/calendar",
};
