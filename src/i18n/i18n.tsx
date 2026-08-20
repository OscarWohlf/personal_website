import React, { useMemo, useState, useEffect } from "react"
import type { Lang } from "./context"
import { dictionaries, en, I18nCtx } from "./context"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en")
  useEffect(() => { localStorage.setItem("lang", lang) }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang] || en
    return (key: string) => dict[key] ?? (dictionaries.en[key] ?? key)
  }, [lang])

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
}
