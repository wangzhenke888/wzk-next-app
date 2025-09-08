"use client"

import { useState } from "react"

export default function FirstPage() {
  const [data, setData] = useState(null)

  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/testData", {
      cache: "no-store",
    })
    setData(await res.json())
  }

  return (
    <div>
      <h1>测试自定义请求响应/api/testData</h1>
      <button
        className="p-2 m-2 rounded-lg bg-blue-400 shadow-2xl text-white font-bold hover:scale-[1.1] transition-all duration-150"
        onClick={handleClick}>
        模拟接口
      </button>
      我是子页面B{JSON.stringify(data)}
    </div>
  )
}
