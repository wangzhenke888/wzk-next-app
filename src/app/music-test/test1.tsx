export default function Test1() {
  const a = () => {
    console.log("a")
  }

  const testFunc = () => {
    function aa() {}
    // 明确声明bb可以是函数或null
    let bb: (() => void) | null = aa
    console.log(aa, bb)
    bb = null
    console.log(aa, bb)
  }

  // promiseAll
  const promiseAll = (list: Promise<any>[]) => {
    if (!Array.isArray(list)) return Promise.reject("这不是数组")

    if (list.length === 0) return Promise.resolve([])

    return new Promise((resolve, reject) => {
      let completedCount = 0
      let result: any = []
      list.forEach((item: any, index) => {
        Promise.resolve(item) // 无论item什么数据都可以处理（数值、异步）
          .then((res: any) => {
            result[index] = res
            completedCount++
          })
          .catch((err: any) => reject(err))
      })
      if (completedCount === list.length) {
        resolve(result)
      }
    })
  }
  // ******************************************************************************

  // async会把返回对象包装成一个Promise
  /**
   * Promise
   * (resolve,reject)——reject只有第一次调用有效，一旦Promise状态确定无法更改
   */
  const testPromise = async () => {
    // 这是一个Promise对象
    console.log("同步Promise结果:", Promise.resolve("1"))
    // await（相当于该Promise调用了一次then）
    // 加await后拿到的是Promise返回的结果
    console.log("异步Promise结果:", await Promise.resolve("1"))

    // async包裹的函数 下面区别：return的是一个Promise||还是一个数据结果
    /**
           * return的是一个Promise
           * 1、async会把结果再包装一道Promise（编码人看不到）
           * 2、简称状态吸收。过程会继承编写的Promise的状态值（async的Promise的resolve）
           * 过程相当于：    
             new Promise((resolve, reject) => {
                Promise.resolve("1").then((data) => resolve(data))
             })
           * 3、事件循环中：进两次微队列，第一次编写的Promise进微队列=》完成后，第二次返回的结果进微队列
           * （属于比较弯绕的面试题）
           */
    return Promise.resolve("1")
    /**
     * return的是一个数据结果
     * 1、事件循环中：进一次微队列，await后面的完成后拿到数据放进微队列，等渲染线程调度
     */
    return await Promise.resolve("1")
  }

  // ******************************************************************************
  // 事件监听器类型定义
  type EventListener<T = any> = (...args: T[]) => void

  // 事件映射接口
  interface EventMap {
    [event: string]: EventListener[]
  }

  // 事件发射器接口
  interface EventEmitterInterface {
    // on<T>(event: string, listener: (...args: T[]) => void): void
    on<T>(event: string, listener: EventListener<T>): void
    trigger<T>(event: string, ...args: T[]): boolean
    off<T>(event: string, listener: EventListener<T>): void
    once<T>(event: string, listener: EventListener<T>): void
    removeAllListeners(event?: string): void
    listenerCount(event: string): number
  }

  class EventEmitter implements EventEmitterInterface {
    private events: EventMap = {}
    private maxListeners: number = 10

    // 设置最大监听器数量
    setMaxListeners(n: number): void {
      this.maxListeners = n
    }

    // 获取最大监听器数量
    getMaxListeners(): number {
      return this.maxListeners
    }

    // 订阅事件
    on<T>(event: string, listener: EventListener<T>): void {
      if (typeof listener !== "function") {
        throw new TypeError("Listener must be a function")
      }

      if (!this.events[event]) {
        this.events[event] = []
      }

      // 检查监听器数量限制
      if (this.events[event].length >= this.maxListeners) {
        console.warn(
          `Possible EventEmitter memory leak detected. ${this.events[event].length} ${event} listeners added. Use emitter.setMaxListeners() to increase limit`
        )
      }

      this.events[event].push(listener)
    }

    // 发布事件
    trigger<T>(event: string, ...args: T[]): boolean {
      const listeners = this.events[event]
      if (!listeners || listeners.length === 0) {
        return false
      }

      // 复制监听器数组以避免在迭代过程中修改
      const listenersCopy = listeners.slice()

      listenersCopy.forEach((listener) => {
        try {
          listener.apply(this, args)
        } catch (error) {
          console.error(`Error in event listener for ${event}:`, error)
        }
      })

      return true
    }

    // 取消订阅
    off<T>(event: string, listener: EventListener<T>): void {
      if (!this.events[event]) {
        return
      }

      const index = this.events[event].indexOf(listener)
      if (index !== -1) {
        this.events[event].splice(index, 1)
      }

      // 如果没有监听器了，删除事件键
      if (this.events[event].length === 0) {
        delete this.events[event]
      }
    }

    // 一次性订阅
    once<T>(event: string, listener: EventListener<T>): void {
      const onceWrapper: EventListener<T> = (...args: T[]) => {
        this.off(event, onceWrapper)
        listener.apply(this, args)
      }

      this.on(event, onceWrapper)
    }

    // 移除所有监听器
    removeAllListeners(event?: string): void {
      if (event) {
        delete this.events[event]
      } else {
        this.events = {}
      }
    }

    // 获取监听器数量
    listenerCount(event: string): number {
      return this.events[event] ? this.events[event].length : 0
    }

    // 获取所有事件名
    eventNames(): string[] {
      return Object.keys(this.events)
    }
  }

  // 测试发布订阅
  const testEmitter = () => {
    const emt = new EventEmitter()
    emt.on("test", (msg: string) => {
      console.log(msg)
    })

    emt.trigger("test", "发布订阅模式")
  }
  // ******************************************************************************
  // ******************************************************************************

  return (
    <div>
      <div
        className="block p-2 mt-1 bg-amber-200 text-center"
        onClick={testEmitter}>
        测试发布订阅
      </div>
      <div
        className="block p-2 mt-1 bg-amber-200 text-center"
        onClick={testFunc}>
        点击testFunc
      </div>
      <div
        className="block p-2 mt-1 bg-amber-200 text-center"
        onClick={testPromise}>
        点击testPromise
      </div>
      <div
        className="block p-2 mt-1 bg-amber-200 text-center"
        onClick={() => promiseAll([])}>
        promiseAll
      </div>
    </div>
  )
}
