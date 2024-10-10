import { store } from "../../../app/store";
import { setIsAuth } from "../store";

export const applyAuthState = () => store.dispatch(setIsAuth(true));
export const removeAuthState = () => store.dispatch(setIsAuth(false));
