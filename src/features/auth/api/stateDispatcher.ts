import { store } from "../../../app/store";
import { setIsAuth } from "../model/slice";

export const applyAuthState = () => store.dispatch(setIsAuth(true));
export const removeAuthState = () => store.dispatch(setIsAuth(false));
