import { Language } from "../domain/language";
import { languageRepository } from "../repositories/language";

class GetLanguagesService {
  async exec() {
    const data = await languageRepository.getLanguages();

    const filteredData = data.map(
      (language): Language => ({
        id: language.id,
        name: language.name,
        code: language.code,
      }),
    );

    return filteredData;
  }
}

export const getLanguagesService = new GetLanguagesService();
