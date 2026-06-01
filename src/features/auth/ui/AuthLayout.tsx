import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { KeepItLogo } from "@/shared/components/KeepItLogo";
import authIllustration from "@/assets/auth.png";

type AuthLayoutProps = {
  children: ReactNode;
  eyebrow: string;
};

export function AuthLayout({ children, eyebrow }: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen bg-[#050505] text-white lg:grid-cols-2">
      <section className="hidden min-h-screen flex-col justify-between border-r border-white/6 bg-[#050505] p-7 lg:flex">
        <Link
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-[#151922]"
          href="/"
        >
          <ArrowLeft className="size-4" />
          <span className="sr-only">Back to homepage</span>
        </Link>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <KeepItLogo className="mb-5 text-5xl" />
          <p className="mb-6 max-w-xs text-xl leading-snug text-[#a1a1aa]">
            {eyebrow}
          </p>
          <Image
            alt="Keep It secure vault illustration"
            className="h-auto w-full max-w-sm "
            priority
            src={authIllustration}
          />
        </div>
        <div />
      </section>
      <section className="flex min-h-screen items-center justify-center px-4 py-5">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <Link
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-white"
              href="/"
            >
              <ArrowLeft className="size-4" />
              <span className="sr-only">Back to homepage</span>
            </Link>
            <KeepItLogo className="text-3xl" />
            <div className="size-10" />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}
