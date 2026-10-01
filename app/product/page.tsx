import Link from "next/link";

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
    tag: "Popular",
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
    tag: "Best Seller",
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
    tag: "Premium",
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
    tag: "New",
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
    tag: "Hot",
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
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "SaaS Platform",
    description:
      "Giao diện nền tảng SaaS hoàn chỉnh với dashboard và quản lý tài khoản.",
    price: "$249",
    category: "SaaS",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/90 px-8 py-5 shadow-sm backdrop-blur">

        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-blue-600"
        >
          MyLogo
        </Link>

        <nav className="flex gap-8 font-medium">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/product"
            className="text-blue-600 transition-colors duration-200"
          >
            Product
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">

          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Our Products
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Build Something
            <span className="text-blue-500"> Amazing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Khám phá bộ sưu tập các sản phẩm và giao diện
            hiện đại được thiết kế để giúp bạn xây dựng
            website chuyên nghiệp.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          {/* Section title */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="font-semibold uppercase tracking-wider text-blue-600">
                Collection
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Featured Products
              </h2>

              <p className="mt-3 text-gray-600">
                Những sản phẩm nổi bật của chúng tôi.
              </p>
            </div>

            <div className="rounded-lg bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
              {products.length} Products
            </div>

          </div>

          {/* Product grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-60 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur">
                    {product.category}
                  </span>

                  {product.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      {product.tag}
                    </span>
                  )}

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold transition group-hover:text-blue-600">
                    {product.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                    <div>
                      <p className="text-xs text-gray-500">
                        Starting from
                      </p>

                      <p className="text-2xl font-extrabold text-blue-600">
                        {product.price}
                      </p>
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
                    >
                      View Product
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center text-white shadow-2xl shadow-blue-600/20">

          <h2 className="text-3xl font-bold md:text-4xl">
            Bạn chưa tìm thấy sản phẩm phù hợp?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Hãy liên hệ với chúng tôi. Chúng tôi có thể
            thiết kế một giải pháp phù hợp với nhu cầu của bạn.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Contact Us →
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 MyLogo. All rights reserved.
      </footer>

    </main>
  );
}