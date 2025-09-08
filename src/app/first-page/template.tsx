"use client"

import { useState } from "react"

export default function template({ children }: { children: React.ReactNode }) {
  const [couter, setCouter] = useState(1)

  return (
    <>
      <button
        className="text-2xl font-bold"
        onClick={() => setCouter((pre) => pre + 1)}>
        我是template计数器
      </button>
      {children}
    </>
  )
}
