import { db } from "@/shared/lib/db";

class LanguageRepository {
  async getLanguages() {
    return await db.language.findMany();
  }
}

export const languageRepository = new LanguageRepository();
