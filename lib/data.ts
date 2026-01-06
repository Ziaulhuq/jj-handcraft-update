import { Data, IProductInput } from "@/types";
import { toSlug } from "./utils";

const products: IProductInput[] = [
  {
    name: "womens mobile bag",
    slug: toSlug("womens mobile bag"),
    category: "side-bag",
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg", "/images/p11-3.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 20.0,
    listPrice: 0,
    brand: "crochet",
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 5,
    countInStock: 2,
    description: "made with 100% handmade with crochet",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Red", "Black"],

    reviews: [],
  },
  {
    name: "womens cross side bag",
    slug: toSlug("womens cross side bag"),
    category: "cross-bag",
    images: ["/images/p12-1.jpg", "/images/p12-2.jpg", "/images/p12-3.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 35.0,
    listPrice: 0,
    brand: "crochet",
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 5,
    countInStock: 2,
    description: "made with 100% handmade with crochet",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Red", "Black"],

    reviews: [],
  },
];

const data: Data = {
  products,
  headerMenus: [
    {
      name: "Today's deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrivals",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],

  carousels: [
    {
      title: "Most popular side bag for sale",
      buttonCaption: "shop now",
      image: "/images/banner1.png",
      url: "/search?category=mobile-bag",
      isPublished: true,
    },
    {
      title: "Most popular wallet pouch for sale",
      buttonCaption: "shop now",
      image: "/images/banner2.png",
      url: "/search?category=side-bag",
      isPublished: true,
    },
  ],
};

export default data;
