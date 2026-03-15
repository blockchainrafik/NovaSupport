"use client";

import { useState } from "react";
import { getAddress, isAllowed, setAllowed } from "@stellar/freighter-api";

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);
  const [status, setStatus] = useState("Connect Freighter to preview Stellar Testnet support.");

  async function connectWallet() {
    try {
      setStatus("Checking Freighter availability...");

      const access = await isAllowed();
      if (!access.isAllowed) {
        const permission = await setAllowed();
        if (!permission.isAllowed) {
          setStatus("Freighter permission was not granted.");
          return;
        }
      }

      const result = await getAddress();
      if (result.error) {
        setStatus(result.error);
        return;
      }

      setAddress(result.address);
      setStatus("Freighter connected on Stellar Testnet.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to connect to Freighter."
      );
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-mint">Wallet</p>
          <p className="mt-2 text-sm text-sky/80">{status}</p>
        </div>
        <button
          type="button"
          onClick={connectWallet}
          className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
        >
          {address ? "Reconnect" : "Connect Freighter"}
        </button>
      </div>
      {address ? (
        <div className="mt-4 rounded-2xl border border-mint/30 bg-ink/50 p-3 text-sm text-white">
          Connected address: <span className="font-semibold">{truncateAddress(address)}</span>
        </div>
      ) : null}
    </div>
  );
}

