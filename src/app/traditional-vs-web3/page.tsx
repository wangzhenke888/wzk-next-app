import React from 'react'

export default function TraditionalVsWeb3Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">传统金融 vs Web3</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">核心差异对比</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">比较项</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">传统金融</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Web3</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">中介机构</td>
                <td className="px-6 py-4 whitespace-nowrap">银行、券商等中心化机构</td>
                <td className="px-6 py-4 whitespace-nowrap">智能合约和去中心化协议</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">开放时间</td>
                <td className="px-6 py-4 whitespace-nowrap">工作日特定时段</td>
                <td className="px-6 py-4 whitespace-nowrap">7×24小时全年无休</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">准入条件</td>
                <td className="px-6 py-4 whitespace-nowrap">KYC/AML验证</td>
                <td className="px-6 py-4 whitespace-nowrap">只需钱包地址</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">透明度</td>
                <td className="px-6 py-4 whitespace-nowrap">有限透明度</td>
                <td className="px-6 py-4 whitespace-nowrap">链上数据完全公开</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">结算速度</td>
                <td className="px-6 py-4 whitespace-nowrap">T+1或更长</td>
                <td className="px-6 py-4 whitespace-nowrap">实时或几分钟内</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* 传统金融优势 */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-bold mb-4 text-green-700">传统金融优势</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>监管保护消费者权益</li>
            <li>成熟的纠纷解决机制</li>
            <li>稳定的法币价值</li>
            <li>广泛的商户接受度</li>
          </ul>
        </div>

        {/* Web3优势 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Web3优势</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>全球无许可访问</li>
            <li>抗审查性</li>
            <li>可编程货币</li>
            <li>资产自我托管</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">风险提示</h2>
        <p className="text-yellow-800">
          Web3金融仍处于早期阶段，价格波动大且监管不明确。传统金融提供更多保护但创新较慢。
          根据自身风险承受能力合理配置资产。
        </p>
      </div>
    </div>
  )
}
