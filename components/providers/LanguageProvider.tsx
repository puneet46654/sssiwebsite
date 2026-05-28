"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CountryCode,
  TranslationKey,
  translations,
} from "@/lib/i18n";

type LanguageContextType = {
  country: CountryCode;
  setCountry: (country: CountryCode) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>("IN");

  useEffect(() => {
    const savedCountry = localStorage.getItem("ssi-country") as CountryCode | null;

    if (savedCountry && savedCountry in translations) {
      setCountryState(savedCountry);
    }
  }, []);

  const setCountry = useCallback((newCountry: CountryCode) => {
    setCountryState(newCountry);
    localStorage.setItem("ssi-country", newCountry);
  }, []);

  const value = useMemo<LanguageContextType>(() => {
    const isRTL = country === "AE";

    return {
      country,
      setCountry,
      isRTL,
      t: (key: TranslationKey) => translations[country][key],
    };
  }, [country, setCountry]);

  useEffect(() => {
    document.documentElement.dir = value.isRTL ? "rtl" : "ltr";
    document.documentElement.lang =
      country === "JP" ? "ja" : country === "AE" ? "ar" : "en";
  }, [country, value.isRTL]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
