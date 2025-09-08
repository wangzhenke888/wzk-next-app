"use client"

import { useState } from "react"

export default function FirstPage() {
  const [data, setData] = useState(null)

  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/posts", {
      cache: "no-store",
    })
    setData(await res.json())
  }

  return (
    <div>
      <h1>测试json-server模拟请求响应http://localhost:4000/posts</h1>
      <button
        className="p-2 m-2 rounded-lg bg-blue-400 shadow-2xl text-white font-bold hover:scale-[1.1] transition-all duration-150"
        onClick={handleClick}>
        handleClick
      </button>
      我是子页面A{JSON.stringify(data)}
    </div>
  )
}
