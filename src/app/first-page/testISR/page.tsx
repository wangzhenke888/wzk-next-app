import { revalidatePath, revalidateTag } from "next/cache"

export default async function testISR() {
  const createAction1 = async () => {
    "use server"
    console.log("普通请求")
  }

  const createAction2 = async () => {
    "use server"
    console.log("触发revalidatePath，ISR的form表单在服务器的日志情况")
    // 触发动态渲染。每次form表单点击时，重新请求页面
    revalidatePath("/first-page/testISR")
  }

  let data = null;
  // 只在运行时获取数据，避免构建时fetch错误
  if (typeof window !== 'undefined') {
    const res = await fetch("/api/testData", {
      next: { tags: ["refreshTag"] }, // 标注ISR的刷新tag
      // cache: "no-store",
    })
    data = await res.json();
  }

  const createAction3 = async () => {
    "use server"
    console.log("ISR的form表单在服务器的日志情况")
    // 触发动态渲染。每次form表单点击时，重新请求页面
    revalidateTag("refreshTag")
  }

  const random = Math.random()

  return (
    <div className="border-2 border-orange-100 bg-orange-50 rounded-lg p-2 m-2">
      <h1 className="text-center font-bold">
        测试ISR，观察随机数确认页面刷新【{random}】
      </h1>
      <div className="p-4 m-4 grid md:grid-cols-3 gap-4 rounded-lg border-2 border-b-blue-500 bg-orange-100">
        <form
          className="rounded-lg border-2 text-center font-bold "
          action={createAction1}>
          <h1>表单1-普通点击</h1>
          <button type="submit" className="m-2 p-2 border-2 font-bold">
            submit
          </button>
        </form>
        <form
          className="rounded-lg border-2 text-center font-bold "
          action={createAction2}>
          <h1>表单2-revalidatePath触发ISR重新渲染</h1>
          <button type="submit" className="m-2 p-2 border-2 font-bold">
            submit
          </button>
        </form>
        <form
          className="rounded-lg border-2 text-center font-bold "
          action={createAction3}>
          <h1>表单3-revalidateTag触发ISR重新渲染</h1>
          <button type="submit" className="m-2 p-2 border-2 font-bold">
            submit
          </button>
        </form>
      </div>
    </div>
  )
}
