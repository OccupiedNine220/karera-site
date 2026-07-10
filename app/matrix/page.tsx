import Link from "next/link";

export default function MatrixGuide() {
  return (
    <main className="min-h-screen w-full px-6 py-10 sm:px-10 lg:px-16">
      <div className="w-full terminal-box p-8 text-slate-300">
        <div className="mb-8 border-b border-slate-700 pb-6">
          <p className="text-sm uppercase tracking-[0.22em] text-emerald-400/90">Матрикс Гайд</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Как начать пользоваться Matrix</h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            Краткий гайд для начинающих: выбираем клиента, создаём или подключаем аккаунт, находим комнаты и общаемся.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="terminal-box border px-6 py-6">
            <h2 className="text-2xl font-semibold text-white">1. Выберите клиент</h2>
            <p className="mt-4 leading-7">
              Перейдите на страницу с Matrix-клиентами и выберите приложение для вашей платформы: <a href="https://matrix.org/clients" target="_blank" rel="noreferrer" className="font-medium text-emerald-300">matrix.org/clients</a>.
            </p>
            <p className="mt-4 leading-7">
              Хорошие open source клиенты: Element, FluffyChat, Nheko, NeoChat, Sesh.
            </p>
          </div>

          <div className="terminal-box border px-6 py-6">
            <h2 className="text-2xl font-semibold text-white">2. Настройте аккаунт</h2>
            <p className="mt-4 leading-7">
              После установки клиента укажите адрес сервера и логин. Если есть собственный Matrix-сервер, используйте его.
            </p>
            <p className="mt-4 leading-7">
              Введите адрес сервера, например <span className="font-medium text-emerald-300">https://matrix.org</span> или свой домен.
            </p>
          </div>

          <div className="terminal-box border px-6 py-6">
            <h2 className="text-2xl font-semibold text-white">3. Найдите комнату</h2>
            <p className="mt-4 leading-7">
              В Matrix комнаты называются «rooms» и могут иметь адрес вида <span className="font-medium text-emerald-300">#example:matrix.org</span>.
            </p>
            <p className="mt-4 leading-7">
              Добавьте ссылку напрямую или найдите комнату через поиск клиента.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
