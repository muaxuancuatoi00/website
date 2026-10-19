
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Starter Website",
    description:
      "Website hiện đại dành cho cá nhân, freelancer và doanh nghiệp nhỏ.",
    price: "$49",
    category: "Website",
    tag: "Phổ biến",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Business Pro",
    description:
      "Giải pháp website chuyên nghiệp với nhiều tính năng dành cho doanh nghiệp.",
    price: "$99",
    category: "Business",
    tag: "Bán chạy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Premium Design",
    description:
      "Thiết kế cao cấp với giao diện đẹp mắt và trải nghiệm người dùng hiện đại.",
    price: "$199",
    category: "Design",
    tag: "Cao cấp",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "E-Commerce Pro",
    description:
      "Website bán hàng hoàn chỉnh dành cho cửa hàng và doanh nghiệp online.",
    price: "$149",
    category: "E-Commerce",
    tag: "Mới",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Portfolio Kit",
    description:
      "Bộ giao diện portfolio chuyên nghiệp dành cho designer và developer.",
    price: "$79",
    category: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Landing Page",
    description:
      "Landing page tối ưu chuyển đổi cho chiến dịch marketing và quảng cáo.",
    price: "$59",
    category: "Marketing",
    tag: "Nổi bật",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Dashboard UI",
    description:
      "Dashboard hiện đại dành cho SaaS, quản lý dữ liệu và hệ thống quản trị.",
    price: "$129",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Mobile App UI",
    description:
      "Bộ giao diện mobile app hiện đại, tối ưu trải nghiệm người dùng.",
    price: "$109",
    category: "Mobile",
    tag: "Mới",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "SaaS Platform",
    description:
      "Giao diện nền tảng SaaS với dashboard và quản lý tài khoản.",
    price: "$249",
    category: "SaaS",
    tag: "Cao cấp",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "Tất cả",
  "Website",
  "Business",
  "Design",
  "E-Commerce",
  "Portfolio",
  "Marketing",
  "Dashboard",
  "Mobile",
  "SaaS",
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Tất cả" ||
        product.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/logo1.png"
              alt="Qu4n Tech"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-extrabold tracking-tight md:text-2xl">
              Qu4n <span className="text-blue-600">Tech</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <Link href="/" className="transition hover:text-blue-600">
              Trang chủ
            </Link>
            <Link href="/product" className="font-semibold text-blue-600">
              Sản phẩm
            </Link>
            <Link href="/#about" className="transition hover:text-blue-600">
              Về chúng tôi
            </Link>
            <Link href="/#services" className="transition hover:text-blue-600">
              Dịch vụ
            </Link>
            <Link href="/contact" className="transition hover:text-blue-600">
              Liên hệ
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5"
          >
            Tư vấn ngay <span className="ml-1">↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071225] text-white">
        <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              QU4N TECH COLLECTION
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Khám phá các
              <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                giải pháp số.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Khám phá các mẫu website, giao diện ứng dụng và nền tảng
              phần mềm được thiết kế để hỗ trợ ý tưởng và nhu cầu kinh
              doanh của bạn.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#product-list"
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Khám phá sản phẩm →
              </a>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Yêu cầu giải pháp ↗
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Thiết kế hiện đại</span>
              <span>✓ Đa dạng lĩnh vực</span>
              <span>✓ Có thể tùy chỉnh</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                    Digital experience
                  </p>
                  <h2 className="mt-2 text-xl font-bold">
                    From idea to reality
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                  ◈
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-2xl text-blue-300">
                    ⌘
                  </div>
                  <h3 className="mt-5 font-bold">Website</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Nền tảng trực tuyến chuyên nghiệp.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-2xl text-indigo-300">
                    ▣
                  </div>
                  <h3 className="mt-5 font-bold">Applications</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Trải nghiệm số trên nhiều thiết bị.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-blue-300">
                        Your next digital project
                      </p>
                      <p className="mt-2 text-lg font-bold">
                        Bắt đầu từ một ý tưởng
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      aria-label="Liên hệ Qu4n Tech"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl transition hover:bg-blue-500"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section
        id="product-list"
        className="scroll-mt-24 bg-slate-50 px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our collection
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Khám phá sản phẩm
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Tìm kiếm và lựa chọn giao diện phù hợp với dự án của bạn.
                Nếu cần giải pháp riêng, hãy liên hệ với đội ngũ của chúng tôi.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-sm">
              Hiển thị{" "}
              <span className="font-bold text-blue-600">
                {filteredProducts.length}
              </span>{" "}
              / {products.length} sản phẩm
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <label htmlFor="product-search" className="sr-only">
              Tìm kiếm sản phẩm
            </label>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                  ⌕
                </span>
                <input
                  id="product-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Tìm website, dashboard, mobile app..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tất cả");
                }}
                className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
              >
                Xóa bộ lọc
              </button>
            </div>

            {/* CATEGORY FILTER */}
            <div className="mt-5">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                Danh mục sản phẩm
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  <Link
                    href={`/product/${product.id}`}
                    aria-label={`Xem chi tiết ${product.name}`}
                    className="relative block h-60 overflow-hidden bg-slate-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 backdrop-blur">
                      {product.category}
                    </span>

                    {product.tag && (
                      <span className="absolute right-4 top-4 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                        {product.tag}
                      </span>
                    )}
                  </Link>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      QU4N TECH
                    </p>

                    <h3 className="mt-2 text-xl font-bold transition group-hover:text-blue-600">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
                      <div>
                        <p className="text-xs text-slate-500">
                          Giá tham khảo từ
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-blue-600">
                          {product.price}
                        </p>
                      </div>

                      <Link
                        href={`/product/${product.id}`}
                        className="rounded-xl bg-[#071225] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                      >
                        Chi tiết <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-9 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="text-4xl text-slate-300">⌕</div>
              <h3 className="mt-4 text-xl font-bold">
                Không tìm thấy sản phẩm
              </h3>
              <p className="mt-2 text-slate-500">
                Hãy thử từ khóa khác hoặc chọn một danh mục khác.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tất cả");
                }}
                className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CUSTOM SOLUTION CTA */}
      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/15 sm:px-12 md:py-20">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Custom solutions
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              Chưa tìm thấy giải pháp phù hợp?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Qu4n Tech có thể cùng bạn trao đổi về website, ứng dụng
              hoặc phần mềm theo yêu cầu riêng của dự án.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Trao đổi dự án <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 px-5 pt-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo1.png"
                alt="Qu4n Tech"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-extrabold">
                Qu4n <span className="text-blue-600">Tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
              Đồng hành cùng cá nhân và doanh nghiệp xây dựng sản phẩm
              số và giải pháp công nghệ phù hợp.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Khám phá</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600">
                Trang chủ
              </Link>
              <Link href="/#about" className="hover:text-blue-600">
                Về chúng tôi
              </Link>
              <Link href="/#services" className="hover:text-blue-600">
                Dịch vụ
              </Link>
              <Link href="/product" className="hover:text-blue-600">
                Sản phẩm
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Hỗ trợ</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/contact" className="hover:text-blue-600">
                Liên hệ
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Yêu cầu tư vấn
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Cần tư vấn?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Chia sẻ ý tưởng để cùng tìm ra giải pháp công nghệ phù hợp.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex font-semibold text-blue-600 hover:text-blue-800"
            >
              Liên hệ Qu4n Tech →
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Qu4n Tech. All rights reserved.
          </p>
          <p>Designed for a digital future.</p>
        </div>
      </footer>
    </main>
  );
}
