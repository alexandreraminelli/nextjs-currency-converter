"use client"

import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {/* Provedor para notificações (toast) do HeroUI */}
      <ToastProvider
        placement="top-right" //posição do toast
        toastOffset={8} // deslocamento
      />
      {/* Provedor de tema com o elemento filho */}
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </HeroUIProvider>
  )
}
