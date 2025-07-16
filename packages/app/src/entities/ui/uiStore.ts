import { createStore } from "@hanghae-plus/lib";

export type ToastType = "info" | "success" | "warning";

export const UI_ACTIONS = {
  // 장바구니 모달
  OPEN_CART_MODAL: "ui/openCartModal",
  CLOSE_CART_MODAL: "ui/closeCartModal",

  // 로딩 상태
  SET_GLOBAL_LOADING: "ui/setGlobalLoading",

  // 알림
  SHOW_TOAST: "ui/showToast",
  HIDE_TOAST: "ui/hideToast",
} as const;

const initialState = {
  // 장바구니 모달 상태
  cartModal: {
    visible: false,
  },

  // 로딩 상태
  globalLoading: false,

  // 토스트 알림
  toast: {
    visible: false,
    message: "",
    type: "info" as ToastType,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const uiReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case UI_ACTIONS.OPEN_CART_MODAL:
      return {
        ...state,
        cartModal: { visible: true },
      };

    case UI_ACTIONS.CLOSE_CART_MODAL:
      return {
        ...state,
        cartModal: { visible: false },
      };

    case UI_ACTIONS.HIDE_TOAST:
      return {
        ...state,
        toast: { ...state.toast, visible: false },
      };

    case UI_ACTIONS.SHOW_TOAST:
      return {
        ...state,
        toast: {
          visible: true,
          message: action.payload.message,
          type: action.payload.type || "info",
        },
      };

    default:
      return state;
  }
};

export const uiStore = createStore(uiReducer, initialState);
