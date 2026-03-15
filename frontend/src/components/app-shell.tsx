import Link from "next/link";
import { WalletConnect } from "@/components/wallet-connect";
import { getNetworkLabel } from "@/lib/stellar";

export function AppShell({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-grid bg-[size:26px_26px] bg-center px-6 py-6 shadow-2xl shadow-black/25 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
              NovaSupport
            </Link>
            <p className="mt-2 max-w-2xl text-sm text-sky/80">
              Stellar-native creator support on {getNetworkLabel()} with Freighter,
              Horizon, and a Soroban-ready contract path.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-sky/80">
            <Link href="/">Home</Link>
            <Link href="/profile/stellar-dev">Sample profile</Link>
            <Link href="/create">Create draft</Link>
          </nav>
        </header>
        <section className="mb-8">
          <WalletConnect />
        </section>
        {children}
      </div>
    </main>
  );
}

