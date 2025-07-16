import { type ToastType, UI_ACTIONS, uiStore } from "./uiStore.ts";

export const showToast = (() => {
  let toastTimer: ReturnType<typeof window.setTimeout>;

  return (message: string, type: ToastType) => {
    // 성공 토스트 표시
    uiStore.dispatch({
      type: UI_ACTIONS.SHOW_TOAST,
      payload: { message, type },
    });

    // 3초 후 토스트 숨김
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      uiStore.dispatch({ type: UI_ACTIONS.HIDE_TOAST });
    }, 3000);
  };
})();

export const closeModal = () => {
  uiStore.dispatch({ type: UI_ACTIONS.CLOSE_CART_MODAL });
};

export const openModal = () => {
  uiStore.dispatch({ type: UI_ACTIONS.OPEN_CART_MODAL });
};
