import React from "react"

// 服务端组件的渲染策略

// 静态渲染
// export default function FirstPage() {
//   const num = Math.random()
//   return <>这是【静态渲染】:{num}</>
// }

import { connection } from "next/server"

// 动态渲染
export default function dynamicPage() {
  connection() // 让该组件为动态渲染
  const num = Math.random()
  return (
    <div>
      <div>这是firstpage的page.tsx页面，【动态渲染】:{num}</div>
      <div>当前环境BASE_URL:{process.env.NEXT_BASE_URL}</div>
    </div>
  )
}
