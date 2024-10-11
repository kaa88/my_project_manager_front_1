import { ApiBasicEntity } from "../../shared/api/models";

/* сколько юзеров?
1. в сторе
2. который получаем из апи
3. который отправляем в апи
*/

export interface User {
  id: number;
  email: string;
  isEmailVerified: boolean;
  isCookieAccepted: boolean;
  isAdmin: boolean;
}

export interface IApiUser extends ApiBasicEntity {
  email: string;
  password: string;
  isEmailVerified: boolean;
  isCookieAccepted: boolean;
  isAdmin: boolean;
  lastVisitAt: string;
  passwordRestoreCode?: string;
  verificationCode?: string;
}
