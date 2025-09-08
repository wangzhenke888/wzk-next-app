import React from 'react'

export default function SolanaPage() {
  const features = [
    {
      title: "高性能",
      description: "每秒处理50,000+交易(TPS)，远超以太坊的15-30 TPS",
      icon: "⚡"
    },
    {
      title: "低费用",
      description: "平均交易费约0.00025美元，是以太坊的千分之一",
      icon: "💰"
    },
    {
      title: "快速确认",
      description: "区块确认时间约400毫秒，实现近乎实时的交易体验",
      icon: "⏱️"
    },
    {
      title: "历史证明(PoH)",
      description: "创新的时间戳机制，提高网络效率和可扩展性",
      icon: "⏳"
    }
  ]

  const ecosystemProjects = [
    {
      name: "Serum",
      category: "DEX",
      description: "去中心化交易所，提供订单簿交易体验"
    },
    {
      name: "Raydium",
      category: "AMM",
      description: "自动化做市商，结合Serum的流动性"
    },
    {
      name: "Magic Eden",
      category: "NFT",
      description: "领先的Solana NFT市场"
    },
    {
      name: "StepN",
      category: "Move-to-Earn",
      description: "边运动边赚取代币的健身应用"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">探索Solana为何火爆</h1>
      
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Solana核心优势</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">技术架构</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold">历史证明(PoH)</h3>
            <p className="pl-4">
              Solana的核心创新，通过可验证的延迟函数(VDF)创建时间证明，
              使节点无需相互通信即可验证时间流逝，大幅提高吞吐量。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Turbine协议</h3>
            <p className="pl-4">
              将数据分解为小块并在网络中传播，优化数据传输效率，
              使Solana能够支持数千个节点同时运行。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Gulf Stream</h3>
            <p className="pl-4">
              无内存池的交易转发协议，将交易直接推送到验证节点边缘，
              减少确认延迟并提高网络容量。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">生态系统项目</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ecosystemProjects.map((project, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {project.category}
                </span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">风险提示</h2>
        <p className="text-yellow-800">
          Solana网络曾多次出现宕机事件，其中心化程度也高于以太坊等网络。
          虽然性能卓越，但新技术可能存在未被发现的漏洞。投资前请充分了解风险。
        </p>
      </div>
    </div>
  )
}
