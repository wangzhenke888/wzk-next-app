"use client"
import { useRouter } from "next/navigation"
import { startTransition, useEffect } from "react"

// 局部错误
export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.log("局部错误为==", error.digest)
  }, [error])

  const handleClick = () => {
    router.refresh()
    startTransition(reset)
  }

  return (
    <div>
      <h1 className="mx-auto text-4xl font-bold">我是局部Error</h1>
      <button onClick={handleClick}>点击重试..</button>
    </div>
  )
}
