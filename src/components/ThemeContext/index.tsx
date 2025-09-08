"use client"
import React, { createContext, useContext } from "react"

const themeContext = createContext("")

export type themeType = "light" | "dark"

interface ThemeProps {
  value?: themeType
  children: React.ReactNode
}

// 主题色组件。
export default function ThemeContext(props: ThemeProps) {
  // 默认光亮主题色
  const { value = "light" } = props

  return (
    <themeContext.Provider value={value}>
      {props.children}
    </themeContext.Provider>
  )
}

// 向外暴露传值方法
export const useTheme = () => useContext(themeContext)
