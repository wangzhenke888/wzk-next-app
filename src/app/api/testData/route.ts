import { NextResponse } from "next/server"

// export const dynamic = 'force-static'

export async function GET() {
  // 可await后端请求，此处集成处理

  return NextResponse.json({
    status: "200",
    body: "自定义GET请求",
    data: '自定义请求mock的数据返回正常'
  })
}


export function POST() {
  return NextResponse.json({
    status: "200",
    body: "自定义POST请求",
    data: '自定义请求mock的数据返回正常'
  })
}
