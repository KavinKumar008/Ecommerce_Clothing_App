"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartQuery, useUpdateCartItem, useRemoveFromCart, CartItem } from "@/hooks/useCart";
import { useIsAuthenticated } from "@/hooks/useAuth";
import { useAuthModal } from "@/context/AuthModalContext";

export default function CartPage() {
  const { data: isAuthenticated, isLoading: isAuthLoading } = useIsAuthenticated();
  const { openAuthModal } = useAuthModal();
  const { data: cartData, isLoading: isCartLoading } = useCartQuery(!!isAuthenticated);
  
  const { mutate: updateQuantity } = useUpdateCartItem();
  const { mutate: removeItem } = useRemoveFromCart();

  const cartItems = cartData?.cart?.items || [];
  
  // Subtotal calculation
  const subtotal = cartItems.reduce((acc: number, item: CartItem) => {
    const rawPrice = item.product.price || "0";
    const priceNum = parseFloat(rawPrice.replace(/[^0-9.]/g, ""));
    return acc + priceNum * item.quantity;
  }, 0);

  const discount = 0; // Future enhancement
  const total = subtotal - discount;

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity({ itemId, quantity: newQuantity });
  };

  if (isAuthLoading || (isAuthenticated && isCartLoading)) {
    return (
      <div className="pt-32 pb-24 flex justify-center">
        <div className="animate-pulse flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-zinc-200 rounded-full"></div>
          <div className="w-4 h-4 bg-zinc-200 rounded-full"></div>
          <div className="w-4 h-4 bg-zinc-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Your bag is empty</h2>
        <p className="text-zinc-500 mb-8">Sign in to sync your bag across all your devices.</p>
        <button
          onClick={openAuthModal}
          className="bg-zinc-900 text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900">
            Shopping Bag {cartItems.length > 0 && `(${cartItems.length})`}
          </h1>
          <Link
            href="/products"
            className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-200 hover:decoration-zinc-900 transition-all"
          >
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-20 text-center border-y border-zinc-100">
            <h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">Your bag is empty</h2>
            <Link
              href="/products"
              className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Shop New Arrivals
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-zinc-200 text-xs font-medium text-zinc-400 uppercase tracking-wider">
                <div className="col-span-7">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <ul className="divide-y divide-zinc-100 sm:divide-zinc-200 border-t border-zinc-100 sm:border-transparent">
                {cartItems.map((item: CartItem) => {
                  const rawPriceNum = parseFloat(item.product.price.replace(/[^0-9.]/g, ""));
                  const itemTotal = rawPriceNum * item.quantity;

                  return (
                    <li key={item._id} className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      <div className="col-span-1 sm:col-span-7 flex gap-4 sm:gap-6">
                        <Link
                          href={`/products/${item.product.id || item.product._id}`}
                          className="w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 bg-zinc-50 rounded-sm overflow-hidden border border-zinc-100 block group relative"
                        >
                          <Image
                            src={item.product.image || item.product.images?.[0] || ""}
                            alt={item.product.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                        <div className="flex flex-col justify-start py-1">
                          <h3 className="text-base font-medium text-zinc-900 leading-tight mb-1">
                            <Link
                              href={`/products/${item.product.id || item.product._id}`}
                              className="hover:underline underline-offset-4 decoration-zinc-300"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <div className="text-sm text-zinc-500 space-y-0.5 mb-3">
                            <p>Color: {item.color}</p>
                            <p>Size: {item.size}</p>
                          </div>
                          <p className="text-base font-medium text-zinc-900 sm:hidden block mb-4">
                            {item.product.price}
                          </p>

                          <div className="mt-auto flex items-center gap-4">
                            <button
                              onClick={() => removeItem(item._id)}
                              className="text-xs text-zinc-400 hover:text-red-600 transition-colors flex items-center gap-1 group"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-trash-linear"
                                className="text-sm group-hover:scale-110 transition-transform"
                              ></iconify-icon>
                              <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-red-200">
                                Remove
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center">
                        <div className="flex items-center border border-zinc-200 rounded-sm h-10 bg-white">
                          <button
                            onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                            className="w-10 h-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors focus:outline-none text-lg font-medium"
                          >
                            −
                          </button>
                          <div className="w-10 flex items-center justify-center text-sm font-medium text-zinc-900 bg-transparent border-x border-zinc-100 h-full">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                            className="w-10 h-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors focus:outline-none text-lg font-medium"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="hidden sm:block col-span-2 text-right">
                        <p className="text-base font-medium text-zinc-900">${itemTotal.toFixed(2)}</p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-zinc-400 mt-0.5">{item.product.price} each</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-zinc-50/50 rounded-sm border border-zinc-100 p-6 lg:p-8 lg:sticky lg:top-24">
                <h2 className="text-lg font-medium tracking-tight text-zinc-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm text-zinc-500 pb-6 border-b border-zinc-200 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="text-zinc-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center">
                      <span>Discounts</span>
                      <span className="text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-base font-medium text-zinc-900">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-medium tracking-tight text-zinc-900 block">
                      ${total.toFixed(2)}
                    </span>
                    <span className="text-xs text-zinc-400">USD, incl. VAT</span>
                  </div>
                </div>

                <button className="w-full bg-zinc-900 text-white py-4 rounded-sm text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm mb-4">
                  Proceed to Checkout
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    stroke-width="1.5"
                    className="text-lg"
                  ></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
