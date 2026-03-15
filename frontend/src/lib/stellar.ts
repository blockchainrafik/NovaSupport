import {
  Asset,
  BASE_FEE,
  Horizon,
  Memo,
  Networks,
  Operation,
  StrKey,
  TransactionBuilder
} from "@stellar/stellar-sdk";

export const stellarConfig = {
  horizonUrl:
    process.env.NEXT_PUBLIC_HORIZON_URL ?? "https://horizon-testnet.stellar.org",
  stellarNetwork: process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "TESTNET",
  networkPassphrase:
    process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE ??
    "Test SDF Network ; September 2015"
};

export const horizonServer = new Horizon.Server(stellarConfig.horizonUrl);

export function isValidStellarAddress(address: string): boolean {
  return StrKey.isValidEd25519PublicKey(address);
}

export function getNetworkLabel(): string {
  return stellarConfig.stellarNetwork === "PUBLIC" ? "Mainnet" : "Testnet";
}

export function getDefaultNetworkPassphrase(): string {
  return stellarConfig.stellarNetwork === "PUBLIC"
    ? Networks.PUBLIC
    : Networks.TESTNET;
}

type SupportIntentInput = {
  sourceAccount: string;
  destination: string;
  amount: string;
  memo?: string;
  assetCode?: string;
  assetIssuer?: string;
  sequence?: string;
};

export async function buildSupportIntent({
  sourceAccount,
  destination,
  amount,
  memo,
  assetCode,
  assetIssuer,
  sequence
}: SupportIntentInput) {
  const account = sequence
    ? {
        accountId: () => sourceAccount,
        sequenceNumber: () => sequence,
        incrementSequenceNumber: () => undefined
      }
    : await horizonServer.loadAccount(sourceAccount);

  const asset =
    assetCode && assetIssuer
      ? new Asset(assetCode, assetIssuer)
      : Asset.native();

  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: stellarConfig.networkPassphrase
  })
    .addOperation(
      Operation.payment({
        destination,
        asset,
        amount
      })
    )
    .setTimeout(30);

  if (memo) {
    transaction.addMemo(Memo.text(memo));
  }

  return transaction.build().toXDR();
}
