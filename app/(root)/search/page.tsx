import ProductCard from "@/components/shared/product/productCard";
import {
  getAllCategories,
  getAllProducts,
} from "@/lib/actions/product.actions";
import Link from "next/link";

const prices = [
  {
    name: "100Kr to 200Kr ",
    value: "100-200",
  },
  {
    name: "201Kr to 500Kr ",
    value: "201-500",
  },
  {
    name: "501Kr to 1000Kr ",
    value: "501-1000",
  },
  {
    name: "1001Kr to 2500Kr ",
    value: "1001-2500",
  },
  {
    name: "2501Kr to 5000Kr ",
    value: "2501-5000",
  },
];

const SearchPage = async (props: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  } = await props.searchParams;

  // Construct filter url
  const getFilterUrl = ({
    c,
    p,
    s,
    r,
    pg,
  }: {
    c?: string;
    p?: string;
    s?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, price, rating, sort, page };

    if (c) params.category = c;
    if (p) params.price = p;
    if (s) params.sort = s;
    if (r) params.rating = r;
    if (pg) params.page = pg;

    return `/search?${new URLSearchParams(params).toString()}`;
  };

  const products = await getAllProducts({
    query: q,
    category,
    price,
    rating,
    sort,
    page: Number(page),
  });

  const categories = await getAllCategories();
  return (
    <div className="grid md:grid-cols-5 md:gap-5">
      <div className="filter-links">
        {/* Category Links */}
        <div className="text-xl mb-2 mt-3">Department</div>
        <div>
          <ul className="space-y-1">
            <li>
              <Link
                className={`${
                  (category === "all" || category === "") && "font-bold"
                }`}
                href={getFilterUrl({ c: "all" })}
              >
                Any
              </Link>
            </li>
            {categories.map((x) => (
              <li key={x.category}>
                <Link
                  href={getFilterUrl({ c: x.category })}
                  className={`${category === x.category && "font-bold"}`}
                >
                  {x.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Price Links */}
        <div className="text-xl mb-2 mt-8">Price</div>
        <div>
          <ul className="space-y-1">
            <li>
              <Link
                className={`${price === "all" && "font-bold"}`}
                href={getFilterUrl({ p: "all" })}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={getFilterUrl({ p: p.value })}
                  className={`${price === p.value && "font-bold"}`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-4 space-y-4 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.data.length === 0 && <div>No products found</div>}
          {products.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
