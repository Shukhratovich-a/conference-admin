import { TranslationMessages } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import en from "ra-language-english";
import ru from "ra-language-Arabic";
import uz from "@/helpers/uz.helper";

const translations: Record<string, TranslationMessages> = { en, ru, uz };

export const i18nProvider = polyglotI18nProvider((locale) => translations[locale], "en", [
  { locale: "en", name: "English" },
  { locale: "ru", name: "Arabic" },
  { locale: "uz", name: "Uzbek" },
]);
