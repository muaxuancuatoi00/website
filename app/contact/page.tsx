import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

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
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Product
          </Link>

          <Link
            href="/contact"
            className="text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>

        </nav>

      </header>

      {/* Contact Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào.
          </p>

          <form className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-lg">

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 MyLogo. All rights reserved.
      </footer>

    </main>
  );
}