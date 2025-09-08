import React from "react"
import Link from "next/link"
export default function layout({ children }: { children: React.ReactNode }) {
  const modules = [
    {
      name: "子页面A",
      content: "测试json-server接口",
      path: "/first-page/pageA",
    },
    {
      name: "子页面B",
      content: "测试next框架中/api/接口",
      path: "/first-page/pageB",
    },
    {
      name: "子页面C",
      content: "测试404",
      path: "/first-page/pageC",
    },
    {
      name: "测试server actions",
      content: "测试server actions",
      path: "/first-page/serverActions",
    },
    {
      name: "测试ISG",
      content: "测试server actions",
      path: "/first-page/testISR",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className=" text-3xl font-bold text-center">
        子页面的布局Layout.tsx
      </h1>
      <div className="grid md:grid-cols-4 gap-4 bg-white m-4">
        {modules.map((item) => {
          return (
            <div
              key={item.path}
              className=" rounded-lg bg-amber-100 p-4 shadow-lg">
              <h1 className="text-2xl text-amber-300 mr-4 mb-4">
                <Link href={item.path}>{item.name}</Link>
              </h1>
              <ul className="list-decimal pl-5 space-y-3">
                <li>{item.content}</li>
              </ul>
            </div>
          )
        })}
      </div>
      {/* 子页面内容 */}
      {children}
    </div>
  )
}
