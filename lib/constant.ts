export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "JJ Handmade";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_NAME || "JJ Handmade build with 100% Handmade";

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `copyright © 2025 ${APP_NAME}. All rights reserved.`;

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9);

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35,
);

export const AVAILABLE_PAYMENT_METHODS = [
  {
    name: "paypal",
    commission: 0,
    isDefault: true,
  },
  {
    name: "stripe",
    commission: 0,
    isDefault: false,
  },
  {
    name: "cash on Delivery",
    commission: 0,
    isDefault: false,
  },
];

export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "paypal";

export const AVAILABLE_DELIVERY_DATES = [
  {
    name: "Tomorrow",
    daysToDeliver: 1,
    shippingPrice: 12,
    freeShippingMinPrice: 0,
  },
  {
    name: "Next 3 Days",
    daysToDeliver: 3,
    shippingPrice: 6,
    freeShippingMinPrice: 0,
  },
  {
    name: "Next 5 Days",
    daysToDeliver: 5,
    shippingPrice: 4,
    freeShippingMinPrice: 35,
  },
];
