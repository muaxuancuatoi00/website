
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Thiết kế Website",
    description:
      "Xây dựng website hiện đại, responsive, tối ưu tốc độ và trải nghiệm người dùng.",
    tags: ["Landing Page", "E-commerce", "Corporate"],
  },
  {
    number: "02",
    icon: "▣",
    title: "Phát triển ứng dụng",
    description:
      "Phát triển ứng dụng di động và nền tảng web theo nhu cầu thực tế của doanh nghiệp.",
    tags: ["Web App", "Mobile App", "UI/UX"],
  },
  {
    number: "03",
    icon: "⌘",
    title: "Phần mềm theo yêu cầu",
    description:
      "Số hóa quy trình, tự động hóa công việc và xây dựng giải pháp quản lý hiệu quả.",
    tags: ["Quản lý", "Tự động hóa", "Tích hợp API"],
  },
];

const values = [
  {
    icon: "✦",
    title: "Sáng tạo",
    description:
      "Luôn tìm kiếm giải pháp mới để tạo ra những sản phẩm khác biệt và hữu ích.",
  },
  {
    icon: "◈",
    title: "Chất lượng",
    description:
      "Ưu tiên hiệu năng, bảo mật, khả năng mở rộng và trải nghiệm người dùng.",
  },
  {
    icon: "◎",
    title: "Đồng hành",
    description:
      "Lắng nghe nhu cầu, minh bạch trong hợp tác và hỗ trợ khách hàng lâu dài.",
  },
];

const process = [
  {
    step: "01",
    title: "Tiếp nhận yêu cầu",
    description: "Lắng nghe mục tiêu và phân tích nhu cầu của khách hàng.",
  },
  {
    step: "02",
    title: "Thiết kế giải pháp",
    description: "Lên kế hoạch, thiết kế giao diện và kiến trúc hệ thống.",
  },
  {
    step: "03",
    title: "Phát triển & kiểm thử",
    description: "Lập trình, kiểm tra chất lượng và tối ưu sản phẩm.",
  },
  {
    step: "04",
    title: "Bàn giao & hỗ trợ",
    description: "Triển khai thực tế, hướng dẫn sử dụng và bảo trì.",
  },
];

export default function Home() {
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
            <a href="#about" className="transition hover:text-blue-600">
              Về chúng tôi
            </a>
            <a href="#services" className="transition hover:text-blue-600">
              Dịch vụ
            </a>
            <a href="#values" className="transition hover:text-blue-600">
              Thế mạnh
            </a>
            <a href="#process" className="transition hover:text-blue-600">
              Quy trình
            </a>
            <Link
              href="/product"
              className="transition hover:text-blue-600"
            >
              Sản phẩm
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5"
          >
            Liên hệ ngay <span className="ml-1">↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071225] text-white">
        <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[110px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Technology · Creativity · Growth
            </div>

            <h1 className="mt-8 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Kiến tạo giải pháp công nghệ
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Cho tương lai số
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Qu4n Tech đồng hành cùng cá nhân và doanh nghiệp trong
              hành trình chuyển đổi số, từ website, ứng dụng đến các
              giải pháp phần mềm theo yêu cầu.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Khám phá dịch vụ <span className="ml-2">→</span>
              </a>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Trao đổi dự án ↗
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Giải pháp linh hoạt</span>
              <span>✓ Thiết kế hiện đại</span>
              <span>✓ Hỗ trợ tận tâm</span>
            </div>
          </div>

          {/* Technology illustration */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs tracking-wider text-slate-400">
                  QU4N DIGITAL STUDIO
                </span>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="flex min-h-56 flex-col justify-between rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-2xl shadow-lg shadow-blue-500/30">
                    ◈
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-300">
                      Digital solutions
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">
                      Think.
                      <br />
                      Design.
                      <br />
                      Develop.
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Web Development
                      </span>
                      <span className="text-blue-400">↗</span>
                    </div>
                    <div className="mt-5 flex h-12 items-end gap-1.5">
                      {[35, 55, 42, 75, 60, 95, 70, 100].map(
                        (height, index) => (
                          <div
                            key={index}
                            style={{ height: `${height}%` }}
                            className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-sky-300"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-xl text-indigo-300">
                        ◫
                      </div>
                      <div>
                        <p className="font-semibold">Smart Applications</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Built for your business
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
                <div>
                  <p className="text-sm font-bold text-white">Web</p>
                  <p className="mt-1 text-xs text-slate-400">Nền tảng số</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">App</p>
                  <p className="mt-1 text-xs text-slate-400">Ứng dụng</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Software</p>
                  <p className="mt-1 text-xs text-slate-400">Phần mềm</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl sm:block md:-left-7">
              <p className="text-xs text-slate-400">Our mindset</p>
              <p className="mt-1 font-semibold text-blue-300">
                Build with purpose ✦
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 md:grid-cols-4 md:px-8">
            {[
              ["01", "Lấy khách hàng làm trọng tâm"],
              ["02", "Thiết kế hướng người dùng"],
              ["03", "Công nghệ phù hợp"],
              ["04", "Đồng hành lâu dài"],
            ].map(([number, title]) => (
              <div key={number} className="flex items-start gap-3">
                <span className="font-mono text-sm text-blue-400">
                  {number}
                </span>
                <p className="text-sm leading-6 text-slate-300">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About Qu4n Tech
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Công nghệ không chỉ là công cụ,
              <span className="text-blue-600"> mà là cơ hội.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Qu4n Tech hướng đến việc xây dựng các sản phẩm và giải
              pháp công nghệ giúp công việc trở nên đơn giản, hiệu quả
              và thuận tiện hơn.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Chúng tôi chú trọng sự kết hợp giữa tư duy công nghệ,
              thiết kế lấy người dùng làm trung tâm và mục tiêu thực tế
              của từng dự án để tạo nên giá trị lâu dài.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-4"
            >
              Cùng chúng tôi phát triển <span>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 to-indigo-100 blur-xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                  ◈
                </div>
                <div>
                  <p className="text-xl font-extrabold">Qu4n Tech</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Digital solutions partner
                  </p>
                </div>
              </div>

              <div className="py-7">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Tầm nhìn
                </p>
                <p className="mt-3 text-lg font-semibold leading-8">
                  Trở thành đối tác công nghệ đáng tin cậy, cùng khách
                  hàng biến ý tưởng thành giải pháp thực tiễn.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-800">
                  Sứ mệnh của chúng tôi
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Ứng dụng công nghệ phù hợp để giải quyết vấn đề thực
                  tế, nâng cao hiệu quả và mở ra cơ hội phát triển mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 bg-slate-50 px-5 py-24 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What we do
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Giải pháp cho hành trình số
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Từ ý tưởng ban đầu đến triển khai thực tế, chúng tôi
                tập trung vào những giải pháp phù hợp với mục tiêu của bạn.
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 font-semibold text-blue-600 hover:text-blue-800"
            >
              Trao đổi nhu cầu ↗
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm text-slate-400">
                    / {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold">{service.title}</h3>

                <p className="mt-4 min-h-20 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-4"
                >
                  Tìm hiểu thêm <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        id="values"
        className="scroll-mt-24 px-5 py-24 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Qu4n Tech
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Giá trị tạo nên khác biệt
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Không chỉ phát triển phần mềm, chúng tôi hướng đến việc
              tạo ra trải nghiệm tốt và giá trị bền vững.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="scroll-mt-24 bg-[#071225] px-5 py-24 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Từ ý tưởng đến sản phẩm thực tế
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Quy trình rõ ràng giúp khách hàng dễ theo dõi tiến độ,
              kiểm soát chất lượng và phối hợp trong suốt dự án.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative border-t border-white/15 pt-7"
              >
                <div className="absolute -top-px left-0 h-0.5 w-16 bg-blue-500" />
                <p className="font-mono text-3xl font-bold text-blue-400">
                  {item.step}
                </p>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <span className="absolute right-0 top-7 hidden text-xl text-slate-600 lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-12 md:py-20">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Let's build something great
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              Bạn có ý tưởng?
              <br />
              Hãy cùng chúng tôi hiện thực hóa.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-blue-100">
              Chia sẻ nhu cầu của bạn để cùng tìm ra giải pháp công nghệ
              phù hợp cho bước phát triển tiếp theo.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Bắt đầu dự án <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 px-5 pt-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
              Đồng hành cùng khách hàng phát triển giải pháp công nghệ
              hiện đại, phù hợp và hướng đến giá trị lâu dài.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Khám phá</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#about" className="hover:text-blue-600">
                Về chúng tôi
              </a>
              <a href="#services" className="hover:text-blue-600">
                Dịch vụ công nghệ
              </a>
              <a href="#values" className="hover:text-blue-600">
                Giá trị cốt lõi
              </a>
              <a href="#process" className="hover:text-blue-600">
                Quy trình làm việc
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Liên kết</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/product" className="hover:text-blue-600">
                Sản phẩm
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Liên hệ
              </Link>
              <a href="#about" className="hover:text-blue-600">
                Tầm nhìn & sứ mệnh
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Kết nối với chúng tôi</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Bạn đang tìm kiếm đối tác phát triển website, ứng dụng
              hoặc phần mềm?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex font-semibold text-blue-600 hover:text-blue-800"
            >
              Gửi yêu cầu tư vấn →
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qu4n Tech. All rights reserved.</p>
          <p>Designed for a digital future.</p>
        </div>
      </footer>
    </main>
  );
}
