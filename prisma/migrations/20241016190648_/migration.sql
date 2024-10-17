-- CreateTable
CREATE TABLE "Kindergarten" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT,
    "address" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "ageGroups" INTEGER[],
    "openingHours" JSONB NOT NULL,
    "teachersCount" INTEGER NOT NULL,
    "groups" INTEGER NOT NULL,
    "mealPlan" TEXT[],
    "sleepingPlaces" BOOLEAN NOT NULL,
    "facebook" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "youtube" TEXT,
    "telegram" TEXT,
    "whatsapp" TEXT,
    "viber" TEXT,
    "cityId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kindergarten_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KindergartenTranslation" (
    "kindergartenId" INTEGER NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_ge" TEXT NOT NULL,
    "address_ru" TEXT NOT NULL,
    "address_ge" TEXT NOT NULL,
    "shortDescription_ru" TEXT NOT NULL,
    "shortDescription_ge" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "description_ge" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KindergartenTranslation_pkey" PRIMARY KEY ("kindergartenId")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT,
    "address" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "educationLevels" TEXT[],
    "studentsTotal" INTEGER NOT NULL,
    "studentsInClass" INTEGER NOT NULL,
    "curriculums" TEXT[],
    "extracurriculars" TEXT[],
    "pricePerYear" TEXT[],
    "facebook" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "youtube" TEXT,
    "telegram" TEXT,
    "whatsapp" TEXT,
    "viber" TEXT,
    "cityId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_KindergartenToLanguage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SchoolToLanguage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Kindergarten_phone_key" ON "Kindergarten"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Kindergarten_email_key" ON "Kindergarten"("email");

-- CreateIndex
CREATE INDEX "Kindergarten_name_idx" ON "Kindergarten"("name");

-- CreateIndex
CREATE INDEX "Kindergarten_cityId_idx" ON "Kindergarten"("cityId");

-- CreateIndex
CREATE INDEX "Kindergarten_areaId_idx" ON "Kindergarten"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "School_phone_key" ON "School"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "School_email_key" ON "School"("email");

-- CreateIndex
CREATE INDEX "School_name_idx" ON "School"("name");

-- CreateIndex
CREATE INDEX "School_cityId_idx" ON "School"("cityId");

-- CreateIndex
CREATE INDEX "School_areaId_idx" ON "School"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "_KindergartenToLanguage_AB_unique" ON "_KindergartenToLanguage"("A", "B");

-- CreateIndex
CREATE INDEX "_KindergartenToLanguage_B_index" ON "_KindergartenToLanguage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SchoolToLanguage_AB_unique" ON "_SchoolToLanguage"("A", "B");

-- CreateIndex
CREATE INDEX "_SchoolToLanguage_B_index" ON "_SchoolToLanguage"("B");

-- AddForeignKey
ALTER TABLE "Kindergarten" ADD CONSTRAINT "Kindergarten_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kindergarten" ADD CONSTRAINT "Kindergarten_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KindergartenTranslation" ADD CONSTRAINT "KindergartenTranslation_kindergartenId_fkey" FOREIGN KEY ("kindergartenId") REFERENCES "Kindergarten"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KindergartenToLanguage" ADD CONSTRAINT "_KindergartenToLanguage_A_fkey" FOREIGN KEY ("A") REFERENCES "Kindergarten"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KindergartenToLanguage" ADD CONSTRAINT "_KindergartenToLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchoolToLanguage" ADD CONSTRAINT "_SchoolToLanguage_A_fkey" FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchoolToLanguage" ADD CONSTRAINT "_SchoolToLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
