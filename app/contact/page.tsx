
import Link from "next/link";

const contactMethods = [
  {
    icon: "✉",
    title: "Email",
    detail: "Gửi yêu cầu qua email",
    value: "contact@qu4ntech.com",
    href: "mailto:contact@qu4ntech.com",
  },
  {
    icon: "☎",
    title: "Điện thoại",
    detail: "Trao đổi trực tiếp với chúng tôi",
    value: "Liên hệ để được tư vấn",
    href: "tel:",
  },
  {
    icon: "◷",
    title: "Thời gian hỗ trợ",
    detail: "Thứ Hai – Thứ Sáu",
    value: "08:00 – 17:30",
    href: null,
  },
];

const topics = [
  { value: "website", label: "Thiết kế website" },
  { value: "application", label: "Phát triển ứng dụng" },
  { value: "software", label: "Phần mềm theo yêu cầu" },
  { value: "consulting", label: "Tư vấn giải pháp công nghệ" },
  { value: "other", label: "Khác" },
];

export default function ContactPage() {
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
            <Link href="/product" className="transition hover:text-blue-600">
              Sản phẩm
            </Link>
            <Link href="/#about" className="transition hover:text-blue-600">
              Về chúng tôi
            </Link>
            <Link href="/#services" className="transition hover:text-blue-600">
              Dịch vụ
            </Link>
            <Link href="/contact" className="font-semibold text-blue-600">
              Liên hệ
            </Link>
          </nav>

          <Link
            href="#contact-form"
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5"
          >
            Gửi yêu cầu <span className="ml-1">↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071225] text-white">
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              CONTACT QU4N TECH
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Hãy cùng nhau
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                tạo nên điều mới.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Bạn đang có ý tưởng website, ứng dụng hay phần mềm?
              Hãy chia sẻ với Qu4n Tech. Chúng tôi sẵn sàng lắng nghe
              nhu cầu và cùng bạn tìm ra hướng đi phù hợp.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Bắt đầu trao đổi →
              </a>
              <Link
                href="/#services"
                className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Khám phá dịch vụ
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 text-lg text-blue-300">
                ✓
              </span>
              Tư vấn theo nhu cầu · Giải pháp linh hoạt
            </div>
          </div>

          {/* Decorative contact card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm text-slate-400">Qu4n Tech</p>
                  <h2 className="mt-1 text-xl font-bold">
                    Let's build together
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                  ↗
                </div>
              </div>

              <div className="space-y-4 py-7">
                {[
                  ["01", "Chia sẻ ý tưởng", "Cho chúng tôi biết mục tiêu của bạn."],
                  ["02", "Cùng tìm giải pháp", "Xác định phạm vi và hướng triển khai."],
                  ["03", "Bắt đầu hợp tác", "Lên kế hoạch cho bước tiếp theo."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 font-mono text-sm text-blue-300">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="border-t border-white/10 pt-5 text-sm text-slate-400">
                Your idea. Our technology. One shared goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Chúng tôi có thể giúp gì cho bạn?
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Chọn phương thức liên hệ phù hợp hoặc gửi thông tin dự án
              qua biểu mẫu bên dưới.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                  {method.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{method.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {method.detail}
                </p>

                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-3 inline-block break-words text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    {method.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-slate-50 px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Send us a message
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Kể cho chúng tôi nghe về dự án của bạn.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Cung cấp một vài thông tin cơ bản để chúng tôi hiểu hơn
              về nhu cầu của bạn. Bạn chưa cần có kế hoạch hoàn chỉnh
              — một ý tưởng ban đầu cũng là điểm khởi đầu tốt.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="text-lg font-bold text-blue-600">✓</span>
                <p className="text-sm leading-7 text-slate-600">
                  Trao đổi về mục tiêu và phạm vi dự án
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg font-bold text-blue-600">✓</span>
                <p className="text-sm leading-7 text-slate-600">
                  Định hướng giải pháp theo nhu cầu thực tế
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg font-bold text-blue-600">✓</span>
                <p className="text-sm leading-7 text-slate-600">
                  Làm rõ các bước tiếp theo trước khi triển khai
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-semibold text-slate-900">
                Bạn đã có yêu cầu cụ thể?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Hãy mô tả mục tiêu, chức năng mong muốn và thời gian
                dự kiến để việc trao đổi hiệu quả hơn.
              </p>
            </div>
          </div>

          <form
            action="mailto:contact@qu4nrtech.com"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/[0.03] sm:p-9"
          >
            <h3 className="text-2xl font-bold">Gửi yêu cầu tư vấn</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Điền thông tin bên dưới. Các trường có dấu * là bắt buộc.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Họ và tên *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Số điện thoại của bạn"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Dịch vụ quan tâm *
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Chọn dịch vụ
                  </option>
                  {topics.map((topic) => (
                    <option key={topic.value} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Ngân sách dự kiến
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Chưa xác định</option>
                  <option>Dưới 10 triệu VNĐ</option>
                  <option>10 – 30 triệu VNĐ</option>
                  <option>30 – 100 triệu VNĐ</option>
                  <option>Trên 100 triệu VNĐ</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nội dung dự án *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mô tả ý tưởng, mục tiêu hoặc các chức năng bạn mong muốn..."
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Gửi yêu cầu tư vấn <span className="ml-2">→</span>
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              Thông tin của bạn chỉ nên được sử dụng cho mục đích liên hệ
              và trao đổi yêu cầu dự án.
            </p>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              QU4N TECH
            </p>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
              Mọi ý tưởng đều xứng đáng được lắng nghe.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hãy bắt đầu bằng một cuộc trò chuyện.
            </p>
          </div>
          <Link
            href="/product"
            className="shrink-0 rounded-xl border border-slate-200 px-6 py-4 font-semibold transition hover:border-blue-300 hover:text-blue-600"
          >
            Khám phá sản phẩm →
          </Link>
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
              Phát triển website, ứng dụng và giải pháp phần mềm hướng
              đến nhu cầu thực tế của khách hàng.
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
                Liên hệ tư vấn
              </Link>
              <Link href="/contact#contact-form" className="hover:text-blue-600">
                Gửi yêu cầu dự án
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Kết nối với chúng tôi</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Email: contact@qu4ntech.com
            </p>
            <Link
              href="/contact#contact-form"
              className="mt-3 inline-flex font-semibold text-blue-600 hover:text-blue-800"
            >
              Trao đổi dự án ↗
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qu4n Tech. All rights reserved.</p>
          <Link href="/" className="hover:text-blue-600">
            Được xây dựng với sự sáng tạo.
          </Link>
        </div>
      </footer>
    </main>
  );
}
