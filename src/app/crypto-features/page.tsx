import React from 'react'

export default function CryptoFeaturesPage() {
  const cryptocurrencies = [
    {
      name: "比特币 (BTC)",
      symbol: "BTC",
      launch: "2009",
      founder: "中本聪",
      features: [
        "第一个去中心化数字货币",
        "固定总量2100万枚",
        "工作量证明(PoW)共识",
        "数字黄金价值存储"
      ],
      color: "bg-orange-100"
    },
    {
      name: "以太坊 (ETH)",
      symbol: "ETH",
      launch: "2015",
      founder: "Vitalik Buterin",
      features: [
        "智能合约平台",
        "支持去中心化应用(DApps)",
        "从PoW转向PoS共识",
        "NFT和DeFi的主要平台"
      ],
      color: "bg-purple-100"
    },
    {
      name: "币安币 (BNB)",
      symbol: "BNB",
      launch: "2017",
      founder: "币安交易所",
      features: [
        "币安生态系统原生代币",
        "用于交易手续费折扣",
        "支持BNB链上的交易",
        "定期代币销毁机制"
      ],
      color: "bg-yellow-100"
    },
    {
      name: "索拉纳 (SOL)",
      symbol: "SOL",
      launch: "2020",
      founder: "Anatoly Yakovenko",
      features: [
        "高性能区块链(50,000+ TPS)",
        "历史证明(PoH)共识机制",
        "低交易费用",
        "快速增长的NFT生态系统"
      ],
      color: "bg-green-100"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">主流加密货币特点</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {cryptocurrencies.map((crypto) => (
          <div key={crypto.symbol} className={`${crypto.color} p-6 rounded-lg shadow-md`}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{crypto.name}</h2>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold">
                {crypto.symbol}
              </span>
            </div>
            <div className="mb-3">
              <span className="font-semibold">创始:</span> {crypto.founder} ({crypto.launch})
            </div>
            <ul className="list-disc pl-5 space-y-1">
              {crypto.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">关键特性比较</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">特性</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">比特币</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">以太坊</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">币安币</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">索拉纳</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">主要用途</td>
                <td className="px-6 py-4 whitespace-nowrap">价值存储</td>
                <td className="px-6 py-4 whitespace-nowrap">智能合约平台</td>
                <td className="px-6 py-4 whitespace-nowrap">交易所代币</td>
                <td className="px-6 py-4 whitespace-nowrap">高性能DApps</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">共识机制</td>
                <td className="px-6 py-4 whitespace-nowrap">PoW</td>
                <td className="px-6 py-4 whitespace-nowrap">PoS</td>
                <td className="px-6 py-4 whitespace-nowrap">PoSA</td>
                <td className="px-6 py-4 whitespace-nowrap">PoH</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">交易速度</td>
                <td className="px-6 py-4 whitespace-nowrap">~7 TPS</td>
                <td className="px-6 py-4 whitespace-nowrap">~15 TPS</td>
                <td className="px-6 py-4 whitespace-nowrap">~1,400 TPS</td>
                <td className="px-6 py-4 whitespace-nowrap">50,000+ TPS</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">市值排名</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">4</td>
                <td className="px-6 py-4 whitespace-nowrap">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">投资风险提示</h2>
        <p className="text-yellow-800">
          加密货币价格波动剧烈，投资前请充分了解风险。本文不构成投资建议，
          请根据自身风险承受能力谨慎决策，并考虑分散投资降低风险。
        </p>
      </div>
    </div>
  )
}
