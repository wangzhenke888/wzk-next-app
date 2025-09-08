"use client"

import React, { useState, useEffect } from "react"
import { Menu, Select } from "antd"
import Link from "next/link"
// import { useRouter, usePathname } from "next/navigation"
import useTitleStore from "@/store/titleStore"
import { useTheme } from "../ThemeContext"

// 语言options
const languageOptions = [
  { value: "en", label: "English" },
  { value: "zh", label: "中文" },
  { value: "ja", label: "日本語" },
]

// 主题色
const themeOptions = [
  { value: "light", label: "光亮主题" },
  { value: "dark", label: "黑暗主题" },
]

// 首页Header
const AppHeader: React.FC = () => {
  const title = useTitleStore((state) => state.title)
  const [locale, setLocale] = useState("zh")
  // const router = useRouter()
  // const pathname = usePathname()

  // Context通信
  const themeValue = useTheme()

  const handleLanguageChange = (value: string) => {
    setLocale(value)
    // 获取当前路径并替换locale部分
    // const currentPath = pathname || "/"
    // const newPath = currentPath.replace(/^\/(en|zh|ja)/, `/${value}`) || `/${value}`
    // router.push(newPath)
  }

  const handleThemeChange = (value: string) => {
    console.log(value)
  }

  // const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // setIsMounted(true)

    // 水合完成后添加标记。触发全局水合闪烁CSS的生效，展示Header该组件
    document.body.classList.add("hydrated")
  }, [])

  // if (!isMounted) {
  //   return (
  //     <header className="bg-gray-800 p-4 opacity-0">
  //       {/* 骨架屏或空内容 */}
  //       aaa
  //     </header>
  //   )
  // }

  return (
    <header
      className="flex items-center bg-gray-800 text-white p-4"
      data-client-only>
      <div className="flex items-center mr-6">
        {title && <h1 className="text-lg font-bold">{title}</h1>}
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        className="flex-grow"
        items={[
          { key: "home", label: <Link href="/">首页</Link> },
          { key: "AI-knowledage", label: "AI栏目" },
          {
            key: "Web3-knowledage",
            label: "Web3栏目",
            children: [
              {
                key: "create-assets",
                label: <Link href="/create-assets">创建资产</Link>,
              },
              {
                key: "traditional-vs-web3",
                label: <Link href="/traditional-vs-web3">金融对比</Link>,
              },
              {
                key: "crypto-features",
                label: <Link href="/crypto-features">加密货币</Link>,
              },
              {
                key: "solana",
                label: <Link href="/solana">Solana</Link>,
              },
              {
                key: "defi-nft",
                label: <Link href="/defi-nft">DeFi & NFT</Link>,
              },
              {
                key: "exchanges",
                label: <Link href="/exchanges">交易所</Link>,
              },
              {
                key: "decentralization",
                label: <Link href="/decentralization">去中心化</Link>,
              },
              {
                key: "metaverse",
                label: <Link href="/metaverse">元宇宙</Link>,
              },
              {
                key: "technologies",
                label: <Link href="/technologies">web3技术栈</Link>,
              },
              {
                key: "websocket",
                label: <Link href="/websocket">WebSocket</Link>,
              },
            ],
          },
        ]}
      />
      <div className="ml-4">
        主题色：
        <Select
          value={themeValue}
          onChange={handleThemeChange}
          options={themeOptions}
          className="w-32"
        />
      </div>

      <div className="ml-4">
        语言：
        <Select
          value={locale}
          onChange={handleLanguageChange}
          options={languageOptions}
          className="w-32"
        />
      </div>
    </header>
  )
}

export default AppHeader
