export default async function FirstPage() {
  "use server"
  async function testServerActions() {
    console.log('执行了test server actions');
    return "testServerActions返回了参数hello"
  }

  const res = await testServerActions()
  return <div>我是子页面，{res}</div>
}
