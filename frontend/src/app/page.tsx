import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { getNetworkLabel, stellarConfig } from "@/lib/stellar";

const highlights = [
  "Public Stellar-native support profiles",
  "Freighter wallet connection for quick onboarding",
  "Horizon Testnet configuration visible in code and UI",
  "Soroban contract scaffold for support events"
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20">
          <p className="text-xs uppercase tracking-[0.35em] text-mint">
            Stellar Wave Submission
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white">
            NovaSupport helps Stellar builders receive community support with
            transparent, low-cost onchain flows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sky/80">
            The MVP focuses on shareable public profiles, wallet readiness, and
            obvious Stellar integration instead of a generic donation template.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/profile/stellar-dev"
              className="rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink"
            >
              View sample profile
            </Link>
            <Link
              href="/create"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
            >
              Draft a support page
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-ocean/60 p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Network intent</p>
          <div className="mt-5 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-sky/85"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-mint/25 bg-ink/50 p-4 text-sm text-sky/80">
            <p className="font-semibold text-white">Active network</p>
            <p className="mt-2">{getNetworkLabel()}</p>
            <p className="mt-4 font-semibold text-white">Horizon endpoint</p>
            <p className="mt-2 break-all">{stellarConfig.horizonUrl}</p>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}

