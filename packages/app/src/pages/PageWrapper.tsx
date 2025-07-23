import type { PropsWithChildren, ReactNode } from "react";
import { CartModal, openModal, Toast, useCartStoreSelector, useUIStore } from "../entities";
import { Footer, PublicImage } from "../components";
import { memo } from "../../../lib/src/hocs/memo";

interface Props {
  headerLeft: ReactNode;
}

export const PageWrapper = memo(function PageWrapper({ headerLeft, children }: PropsWithChildren<Props>) {
  const { cartModal, toast } = useUIStore();
  const cartSize = useCartStoreSelector((cart) => cart.items.length);

  const cartCount = (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cartSize > 99 ? "99+" : cartSize}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {headerLeft}
            <div className="flex items-center space-x-2">
              {/* 장바구니 아이콘 */}
              <button
                id="cart-icon-btn"
                className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={openModal}
              >
                <PublicImage src="/cart-header-icon.svg" alt="장바구니" className="w-6 h-6" />
                {cartSize > 0 && cartCount}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-4">{children}</main>

      {cartModal.visible && <CartModal />}

      {toast.visible && <Toast />}

      <Footer />
    </div>
  );
});
