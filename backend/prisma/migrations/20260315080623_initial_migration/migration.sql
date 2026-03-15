-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "walletAddress" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcceptedAsset" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "issuer" TEXT,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AcceptedAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportTransaction" (
    "id" TEXT NOT NULL,
    "txHash" TEXT NOT NULL,
    "amount" DECIMAL(18,7) NOT NULL,
    "assetCode" TEXT NOT NULL,
    "assetIssuer" TEXT,
    "status" TEXT NOT NULL,
    "message" TEXT,
    "stellarNetwork" TEXT NOT NULL,
    "supporterAddress" TEXT,
    "recipientAddress" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "supporterId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE INDEX "AcceptedAsset_profileId_idx" ON "AcceptedAsset"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "SupportTransaction_txHash_key" ON "SupportTransaction"("txHash");

-- CreateIndex
CREATE INDEX "SupportTransaction_profileId_idx" ON "SupportTransaction"("profileId");

-- CreateIndex
CREATE INDEX "SupportTransaction_supporterId_idx" ON "SupportTransaction"("supporterId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedAsset" ADD CONSTRAINT "AcceptedAsset_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportTransaction" ADD CONSTRAINT "SupportTransaction_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportTransaction" ADD CONSTRAINT "SupportTransaction_supporterId_fkey" FOREIGN KEY ("supporterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
