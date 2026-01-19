/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `card_account_holder_name` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_email` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_methud_type` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transition_id` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_userEmail_fkey";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "userEmail",
ADD COLUMN     "card_account_holder_name" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "customer_email" TEXT NOT NULL,
ADD COLUMN     "payment_methud_type" TEXT NOT NULL,
ADD COLUMN     "transition_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_customer_email_fkey" FOREIGN KEY ("customer_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
