import React from 'react'

export default function MetaversePage() {
  const technologies = [
    {
      name: "区块链",
      description: "提供数字资产所有权和经济系统基础",
      examples: "NFT, 加密货币, 智能合约"
    },
    {
      name: "虚拟现实(VR)",
      description: "创造沉浸式3D体验的关键技术",
      examples: "Oculus, HTC Vive"
    },
    {
      name: "增强现实(AR)",
      description: "将数字内容叠加到现实世界",
      examples: "Pokemon Go, AR导航"
    },
    {
      name: "去中心化身份(DID)",
      description: "用户自主控制的跨平台数字身份",
      examples: "ENS, 数字护照"
    }
  ]

  const projects = [
    {
      name: "Decentraland",
      description: "基于以太坊的虚拟世界，用户可以购买LAND NFT",
      url: "https://decentraland.org"
    },
    {
      name: "The Sandbox",
      description: "游戏化元宇宙平台，强调用户生成内容",
      url: "https://www.sandbox.game"
    },
    {
      name: "CryptoVoxels",
      description: "简约风格的元宇宙，专注于艺术和社交",
      url: "https://www.cryptovoxels.com"
    },
    {
      name: "Somnium Space",
      description: "VR优先的元宇宙，支持全沉浸式体验",
      url: "https://somniumspace.com"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Web3视角下的元宇宙</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">什么是Web3元宇宙?</h2>
        <p className="text-lg mb-4">
          Web3元宇宙是下一代互联网的沉浸式3D空间，由区块链技术驱动，
          强调用户对数字资产和身份的真正所有权。与传统元宇宙不同，
          Web3元宇宙是开放、无需许可且由社区治理的。
        </p>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-sm max-w-2xl">
            <h3 className="text-xl font-bold mb-2 text-center">核心特征</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>数字资产的真正所有权(NFT)</li>
              <li>去中心化治理(DAO)</li>
              <li>跨平台互操作性</li>
              <li>开放的经济系统</li>
              <li>用户控制的数据和身份</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">关键技术组件</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="mb-2">{tech.description}</p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">示例:</span> {tech.examples}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">代表性Web3元宇宙项目</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-3">{project.description}</p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                访问官网 →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">当前挑战与风险</h2>
        <ul className="list-disc pl-5 space-y-2 text-yellow-800">
          <li>技术成熟度不足，用户体验有待提升</li>
          <li>硬件设备(如VR头显)价格昂贵</li>
          <li>缺乏统一标准和互操作性</li>
          <li>投机泡沫风险，许多项目可能无法长期存活</li>
          <li>监管不确定性，特别是涉及加密货币和NFT的部分</li>
        </ul>
      </div>
    </div>
  )
}
