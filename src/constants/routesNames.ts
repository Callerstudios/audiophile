const ROUTES = {
  HOME: "/",
  HEADPHONES: "/headphones",
  SPEAKERS: "/speakers",
  EARPHONES: "/earphones",
  PRODUCT: "/product/:productId",
  EMPTY_PRODUCT: "/product",
  CHECKOUT: "/checkout",
  ORDERS: "/orders/:orderId",
} as const;

export default ROUTES