// 首页尽量是一个服务端RSC组件，能更方便的调用RSC和RCC
import React from "react"
import HomeContainer from "@/components/HomeContainer"

export default async function Home() {
  // 服务端组件JS不会打包到前端
  function getPageData() {
    console.log("object")
  }

  const title = "wzk的next项目"

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("2s模拟加载场景...")
      resolve("")
    }, 2000)
  })

  return (
    <div>
      <div style={{ padding: "24px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>{title}</h1>
        {/* 内容 */}
        <HomeContainer />
      </div>
    </div>
  )
}
