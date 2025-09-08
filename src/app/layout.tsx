import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
// 组件
import Header from "@/components/Header"
import ThemeContext from "@/components/ThemeContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "wzk的next项目",
  description: "next实践Demo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <ThemeContext>
        <Header />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </ThemeContext>
    </html>
  )
}
