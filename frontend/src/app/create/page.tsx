import { AppShell } from "@/components/app-shell";

export default function CreatePage() {
  return (
    <AppShell>
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20">
        <p className="text-xs uppercase tracking-[0.3em] text-mint">Draft flow</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Create your NovaSupport profile draft
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-sky/80">
          This starter page exists to show the intended MVP path: connect a wallet,
          choose accepted Stellar assets, and publish a shareable support profile.
          Contributors can turn this page into a real form wired to the backend.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-ink/50 p-5">
            <p className="text-sm font-semibold text-white">Planned fields</p>
            <ul className="mt-4 space-y-2 text-sm text-sky/80">
              <li>Display name and username</li>
              <li>Short bio focused on ecosystem work</li>
              <li>Primary Stellar wallet address</li>
              <li>Accepted asset list such as XLM and USDC</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-gold/10 p-5">
            <p className="text-sm font-semibold text-white">Contributor note</p>
            <p className="mt-4 text-sm leading-7 text-sky/85">
              Keep this flow simple. The MVP does not need scheduling, subscriptions,
              analytics dashboards, or a generic checkout builder. It only needs a
              clear path from profile to Stellar-native support.
            </p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
