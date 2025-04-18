import { hashSync } from "bcrypt-ts-edge";
const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "Faded Slim Denim Jacket",
      slug: "faded-slim-denim-jacket",
      category: "Women's Jackets",
      description: "Stylish and comfortable denim jacket",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
        "/images/sample-products/p1-3.jpg",
      ],
      price: 159.99,
      brand: "Polo",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg",
    },
    {
      name: "Print Sheer Relaxed Blouse",
      slug: "print-sheer-relaxed-blouse",
      category: "Women's Tops",
      description: "Lightweight and breathable blouse for summer",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
        "/images/sample-products/p2-3.jpg",
      ],
      price: 85.9,
      brand: "Tommy Hilfiger",
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: "banner-2.jpg",
    },
    {
      name: "Tommy Hilfiger Classic Fit Dress Shirt",
      slug: "tommy-hilfiger-classic-fit-dress-shirt",
      category: "Women's Dress Shirts",
      description: "A perfect blend of sophistication and comfort",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
        "/images/sample-products/p3-3.jpg",
      ],
      price: 99.95,
      brand: "Tommy Hilfiger",
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Cropped Trench Coat",
      slug: "cropped-trench-coat",
      category: "women's Outerwear",
      description: "Stylish cropped trench coat for a chic look",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
        "/images/sample-products/p4-3.jpg",
      ],
      price: 139.95,
      brand: "Calvin Klein",
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Slim Fit Single Breasted Crepe Blazer",
      slug: "slim-fit-single-breasted-crepe-blazer",
      category: "Women's Blazers",
      description: "Elegant and versatile blazer for any occasion",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
        "/images/sample-products/p5-3.jpg",
      ],
      price: 79.99,
      brand: "Calvin Klein",
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Ultra Light Down Mock Neck Jacket",
      slug: "ultra-light-down-mock-neck-jacket",
      category: "Women's Jackets",
      description: "Lightweight and warm jacket for chilly days",
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg",
        "/images/sample-products/p6-3.jpg",
      ],
      price: 99.99,
      brand: "Polo",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;
