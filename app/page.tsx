import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#020617] px-6 py-10 text-slate-300 sm:px-10 lg:px-16">
      <Script
        src="https://keepandroidopen.org/banner.js?size=minimal&animation=off&hidebutton=off"
        strategy="afterInteractive"
      />
      <div className="mx-auto w-full max-w-[1600px]">
        <section className="terminal-box border border-slate-700 bg-[#03111f] p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-400/90">karera.fun</p>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                Маленький хостинг open source приложений
              </h1>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300 sm:text-lg">
                Здесь у нас все держится на картошках, на слове "this is not bug, this is feature" и на других вещах которые должны держать все это.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="terminal-box border border-slate-700 bg-[#06111c] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400/90">search</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">searxng</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Приватный поисковый движок
            </p>
            <Link href="https://searxng.karera.fun" className="mt-6 inline-flex text-emerald-300">
              searxng.karera.fun
            </Link>
          </article>

          <article className="terminal-box border border-slate-700 bg-[#06111c] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400/90">chat</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Matrix</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Федеративный мессенджер. Гайд по подключению и началу работы доступен на отдельной странице.
            </p>
            <Link href="/matrix" className="mt-6 inline-flex text-emerald-300">
              /matrix
            </Link>
          </article>

          <article className="terminal-box border border-slate-700 bg-[#06111c] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400/90">search</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">4get</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Движок который забывает... fourget
            </p>
            <Link href="https://4get.karera.fun" className="mt-6 inline-flex text-emerald-300">
              4get.karera.fun
            </Link>
          </article>

          <article className="terminal-box border border-slate-700 bg-[#06111c] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400/90">clients</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Matrix клиенты</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Список поддерживаемых desktop и mobile клиентов: Element, FluffyChat, Sesh и другие.
            </p>
            <a href="https://matrix.org/clients" target="_blank" rel="noreferrer" className="mt-6 inline-flex text-emerald-300">
              matrix.org/clients
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
