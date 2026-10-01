import Link from "next/link";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Fast",
    description: "Build your website quickly.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Easy",
    description: "Simple and easy to use.",
    icon: "✨",
  },
  {
    id: 3,
    title: "Modern",
    description: "Beautiful modern design.",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/90 px-8 py-5 shadow-sm backdrop-blur">
        <div className="text-2xl font-extrabold tracking-tight text-blue-600">
          MyLogo
        </div>

        <nav className="flex gap-8 font-medium">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Home
          </a>

          <Link
            href="/product"
            className="transition-colors duration-200 hover:text-blue-600"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 px-6 py-32 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_40%)]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Next.js + Tailwind CSS
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Build Something{" "}
            <span className="text-blue-500">Amazing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Create beautiful, modern and responsive websites
            with Next.js and Tailwind CSS.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/40 active:translate-y-0">
            Get Started →
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-gray-200 bg-white px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          {/* Customers */}
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              50K+
            </p>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Khách hàng tin dùng
            </p>
          </div>

          {/* Reviews */}
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              99.8%
            </p>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Đánh giá 5 sao
            </p>
          </div>

          {/* Delivery */}
          <div className="text-center">
            <p className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              24h
            </p>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Giao hàng siêu tốc
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Features
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              Why choose us?
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to build a modern website quickly
              and efficiently.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-16 text-center text-white shadow-2xl shadow-blue-600/20">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Start building your next beautiful website today.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
            Start Building
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 MyLogo. All rights reserved.
      </footer>

    </main>
  );
}