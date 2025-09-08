import React from 'react'

export default function ExchangesPage() {
  const exchanges = [
    {
      name: '币安',
      features: ['全球最大交易量', '丰富的交易对', 'Launchpad项目', '低手续费'],
      security: '高',
      fees: '0.1%现货交易费',
      rating: '★★★★★'
    },
    {
      name: 'OKX',
      features: ['多链支持', '期权交易', '赚币产品', 'Web3钱包'],
      security: '高', 
      fees: '0.08%-0.1%现货交易费',
      rating: '★★★★☆'
    },
    {
      name: 'Gate',
      features: ['山寨币丰富', 'Startup项目', '量化工具', 'HipoSwap'],
      security: '中高',
      fees: '0.2%现货交易费',
      rating: '★★★☆☆'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">交易所介绍</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {exchanges.map((exchange) => (
          <div key={exchange.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">{exchange.name}</h2>
            <div className="mb-3">
              <span className="font-semibold">安全等级:</span> {exchange.security}
            </div>
            <div className="mb-3">
              <span className="font-semibold">手续费:</span> {exchange.fees}
            </div>
            <div className="mb-4">
              <span className="font-semibold">评级:</span> {exchange.rating}
            </div>
            <h3 className="font-bold mb-2">主要特点:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {exchange.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-bold p-4 bg-gray-100">交易所功能对比</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">交易所</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">现货交易费</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">衍生品</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Web3功能</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">币安</td>
                <td className="px-6 py-4 whitespace-nowrap">0.1%</td>
                <td className="px-6 py-4 whitespace-nowrap">期货、期权</td>
                <td className="px-6 py-4 whitespace-nowrap">钱包、DEX</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">OKX</td>
                <td className="px-6 py-4 whitespace-nowrap">0.08%-0.1%</td>
                <td className="px-6 py-4 whitespace-nowrap">期货、期权</td>
                <td className="px-6 py-4 whitespace-nowrap">钱包、DEX、NFT</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Gate</td>
                <td className="px-6 py-4 whitespace-nowrap">0.2%</td>
                <td className="px-6 py-4 whitespace-nowrap">期货</td>
                <td className="px-6 py-4 whitespace-nowrap">钱包</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-xl font-bold mb-3">选择建议</h2>
        <p className="text-green-800">
          根据您的交易需求选择交易所：大额交易选择币安，专业交易选择OKX，探索新项目选择Gate。
          建议分散资产到多个交易所以降低风险。
        </p>
      </div>
    </div>
  )
}
