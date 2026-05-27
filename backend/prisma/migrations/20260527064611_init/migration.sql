-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'COFFEE_CHAT', 'INTERVIEW', 'ACCEPTED', 'REJECTED', 'ON_HOLD');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "serviceType" TEXT,
    "websiteUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "jobUrl" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'DRAFT',
    "deadline" TIMESTAMP(3),
    "memo" TEXT,
    "portfolioVersion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoverLetterQuestion" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoverLetterQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TechTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationTechTag" (
    "applicationId" INTEGER NOT NULL,
    "techTagId" INTEGER NOT NULL,

    CONSTRAINT "ApplicationTechTag_pkey" PRIMARY KEY ("applicationId","techTagId")
);

-- CreateIndex
CREATE INDEX "Application_companyId_idx" ON "Application"("companyId");

-- CreateIndex
CREATE INDEX "Application_status_idx" ON "Application"("status");

-- CreateIndex
CREATE INDEX "Application_deadline_idx" ON "Application"("deadline");

-- CreateIndex
CREATE INDEX "CoverLetterQuestion_applicationId_idx" ON "CoverLetterQuestion"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "TechTag_name_key" ON "TechTag"("name");

-- CreateIndex
CREATE INDEX "ApplicationTechTag_techTagId_idx" ON "ApplicationTechTag"("techTagId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoverLetterQuestion" ADD CONSTRAINT "CoverLetterQuestion_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationTechTag" ADD CONSTRAINT "ApplicationTechTag_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationTechTag" ADD CONSTRAINT "ApplicationTechTag_techTagId_fkey" FOREIGN KEY ("techTagId") REFERENCES "TechTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
