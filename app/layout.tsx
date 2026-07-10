import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "root@karera.fun"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#020617] text-slate-300">
        {children}
        <footer className="w-full border-t border-slate-800 bg-[#020617] px-6 py-5 text-sm text-slate-400 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>root@karera.fun</span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <Link href="/" className="text-emerald-300 hover:text-emerald-200">
                Домой
              </Link>
              <a href="https://github.com/occupiednine220/karera-site" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200">
                github.com/occupiednine220/karera-site
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
