import { AppShell } from "@/components/app-shell";
import { ProfileCard } from "@/components/profile-card";
import { SupportPanel } from "@/components/support-panel";

type PageProps = {
  params: {
    username: string;
  };
};

const sampleProfiles: Record<
  string,
  {
    displayName: string;
    bio: string;
    walletAddress: string;
    acceptedAssets: Array<{ code: string; issuer?: string }>;
  }
> = {
  "stellar-dev": {
    displayName: "Stellar Dev Collective",
    bio: "Building open-source tools, onboarding guides, and wallet education for the Stellar ecosystem. NovaSupport gives this work a direct path to community funding.",
    walletAddress: "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF",
    acceptedAssets: [
      { code: "XLM" },
      {
        code: "USDC",
        issuer: "GA5ZSEJYB37Y5WZL56FWSOZ5LX5K7Q4SOX7YH3Y2AWJZQURQW6Z5YB2M"
      }
    ]
  }
};

export default function ProfilePage({ params }: PageProps) {
  const profile = sampleProfiles[params.username] ?? {
    displayName: "New NovaSupport Profile",
    bio: "This route is ready for backend profile hydration. Replace the sample data with a database-backed query when the API is connected.",
    walletAddress: "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF",
    acceptedAssets: [{ code: "XLM" }]
  };

  return (
    <AppShell>
      <div className="space-y-8">
        <ProfileCard
          username={params.username}
          displayName={profile.displayName}
          bio={profile.bio}
          walletAddress={profile.walletAddress}
          acceptedAssets={profile.acceptedAssets}
        />
        <SupportPanel walletAddress={profile.walletAddress} />
      </div>
    </AppShell>
  );
}

