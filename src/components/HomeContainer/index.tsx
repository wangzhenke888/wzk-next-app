"use client"

import React from "react"
import useTitleStore from "@/store/titleStore"
import Link from "next/link"
import { Row, Col, Card } from "antd"

export default function home() {
  const modules = [
    {
      key: "firstPage",
      path: `/first-page`,
      pageTitleKey: "firstPage",
    },
    {
      key: "createAssets",
      path: `/create-assets`,
      pageTitleKey: "createAssets",
    },
    {
      key: "financialComparison",
      path: "/traditional-vs-web3",
      pageTitleKey: "financialComparison",
    },
    {
      key: "cryptocurrency",
      path: "/crypto-features",
      pageTitleKey: "cryptocurrency",
    },
    {
      key: "solana",
      path: "/solana",
      pageTitleKey: "solana",
    },
    {
      key: "defiNft",
      path: "/defi-nft",
      pageTitleKey: "defiNft",
    },
    {
      key: "exchanges",
      path: "/exchanges",
      pageTitleKey: "exchanges",
    },
    {
      key: "decentralization",
      path: "/decentralization",
      pageTitleKey: "decentralization",
    },
    {
      key: "metaverse",
      path: "/metaverse",
      pageTitleKey: "metaverse",
    },
    {
      key: "technologies",
      path: "/technologies",
      pageTitleKey: "technologies",
    },
    {
      key: "musicTest",
      path: "/music-test",
      pageTitleKey: "musicTest",
    },
  ]
  const setTitle = useTitleStore((state) => state.setTitle)

  const handleModuleClick = (pageTitleKey: string) => {
    setTitle(pageTitleKey)
  }

  function getHomeData() {
    console.log("object")
  }

  return (
    <div>
      <Row gutter={[24, 24]}>
        {modules.map((module: any) => (
          <Col span={8} key={module.path}>
            <Link
              href={module.path}
              onClick={() => handleModuleClick(module.pageTitleKey)}>
              <Card title={module.key} hoverable>
                {module.key}模块
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}
