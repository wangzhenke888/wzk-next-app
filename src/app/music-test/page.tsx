"use client"
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react"
import "./index.css"
import Test1 from "./test1"
// import FileTest from "./FileTest"

export default function MusicTestPage() {
  // 滚动列表状态和数据
  const [scrollData, setScrollData] = useState<Array<string>>([])
  const listRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false) // 加载状态
  const startY = useRef(0) // 触摸起始位置Y坐标
  const [pullDownStatus, setPullDownStatus] = useState(0) // 下拉状态: 0-默认 1-下拉中 2-释放刷新

  /**
   * 处理滚动事件 - 实现上拉加载更多（传统方式）
   * 监听滚动用于上拉加载的必要性————滚动的惯性距离也需要监听
   * @param e 滚动事件对象
   * scrollTop: 元素顶部到可视区域顶部的距离(滚动距离)
   * scrollHeight: 元素内容总高度(包括不可见部分)
   * clientHeight: 元素可视区域高度
   * 原理：当滚动到底部(距离底部10px内)且不在加载状态时触发加载更多
   */
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLDivElement
    const { scrollTop, scrollHeight, clientHeight } = target

    // 滚动到底部检测条件
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10

    // 触发加载更多数据的条件：滚动到底部且当前没有正在加载的数据
    if (isAtBottom && !isLoading) {
      console.log("触发加载更多数据")
      loadMoreData()
    }
  }

  /**
   * 处理触摸开始事件 - 记录起始位置
   * @param e 触摸事件对象
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].pageY // 记录触摸起始Y坐标
  }

  /**
   * 处理触摸移动事件 - 实现下拉刷新
   * @param e 触摸事件对象
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const touchY = e.touches[0].pageY // 当前触摸Y坐标
    const moveDistance = touchY - startY.current // 计算移动距离

    // 只有在顶部(scrollTop=0)且向下拉时才触发
    if (target.scrollTop === 0 && moveDistance > 0) {
      // 根据下拉距离设置状态
      if (moveDistance > 100) {
        setPullDownStatus(2) // 释放刷新
      } else {
        setPullDownStatus(1) // 下拉中
      }
    }
  }

  /**
   * 处理触摸结束事件 - 触发刷新
   */
  const handleTouchEnd = () => {
    if (pullDownStatus === 2 && !isLoading) {
      refreshData() // 释放时触发刷新
    }
    setPullDownStatus(0) // 重置状态
  }

  /**
   * 刷新数据 - 重置列表并加载新数据
   */
  const refreshData = () => {
    setIsLoading(true)
    // 模拟异步加载
    setTimeout(() => {
      setScrollData(Array.from({ length: 20 }, (_, i) => `新歌曲${i + 1}`))
      setIsLoading(false)
    }, 1000)
  }

  /**
   * 初始化滚动事件监听 - 传统方式
   * 在组件挂载时添加滚动事件监听器，在卸载时移除
   * 使用passive: false确保可以调用preventDefault()
   */
  useEffect(() => {
    const listElement = listRef.current
    if (listElement) {
      console.log("添加滚动事件监听器")
      listElement.addEventListener("scroll", handleScroll, { passive: false })
      loadPage() // 初始加载数据

      return () => {
        console.log("移除滚动事件监听器")
        listElement.removeEventListener("scroll", handleScroll)
      }
    } else {
      console.error("listElement为null，无法添加事件监听")
    }
  }, [])

  // 刷新页面
  const loadPage = () => {
    setScrollData(
      Array.from({ length: 20 }, (_, index) => `第${index + 1}首歌`)
    )
  }

  // 加载更多数据 (每次追加20条)
  const loadMoreData = () => {
    if (isLoading) return

    setIsLoading(true)
    const startIndex = scrollData.length + 1
    const newData = Array.from(
      { length: 20 },
      (_, index) => `第${startIndex + index}首歌`
    )

    setTimeout(() => {
      setScrollData((prev) => [...prev, ...newData])
      setIsLoading(false)
    }, 800) // 模拟异步加载
  }

  useMemo(() => {
    console.log(111)
  }, [])

  useCallback(() => {
    console.log(111)
  }, [])

  // 子组件
  const ExpensiveComponent = React.memo(({ compute, onClick }: any) => {
    const result = compute
    return <button onClick={onClick}>{result}</button>
  })

  // ******************************************************************************

  const [count, setCount] = useState(1)
  // useMemohe和useCallback可以同时使用两者
  // 将日志移出useMemo，避免依赖变化时多次记录

  const computedValue = useMemo(() => {
    // setCount((pre) => pre + 1)
    return count * 10
  }, [count])
  useEffect(() => {
    console.log("computedValue：", computedValue)
  }, [computedValue])
  const increment = useCallback(() => setCount((c) => c + 1), [])
  // ******************************************************************************
  // ******************************************************************************
  // ******************************************************************************
  // ******************************************************************************
  // ******************************************************************************
  // ******************************************************************************

  return (
    <div className="contai`ner">
      <ExpensiveComponent compute={computedValue} onClick={increment} />
      <div>音乐播放测试</div>
      {/* <FileTest /> */}
      <Test1 />
      <div
        ref={listRef}
        className="list"
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {/* 下拉刷新提示 */}
        <div className="refresh-tip">
          {pullDownStatus === 1 && "下拉刷新"}
          {pullDownStatus === 2 && "释放刷新"}
          {isLoading && pullDownStatus === 2 && "正在刷新..."}
        </div>

        {/* 列表内容 */}
        {scrollData.map((item, index) => {
          return (
            <div key={index} className="item">
              {item}
            </div>
          )
        })}

        {/* 上拉加载提示 */}
        <div className="load-tip">
          {isLoading ? "正在加载..." : "上拉加载更多"}
        </div>
      </div>
    </div>
  )
}
