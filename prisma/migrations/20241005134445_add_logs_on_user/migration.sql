-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;