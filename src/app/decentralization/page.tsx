import React from 'react'

export default function DecentralizationPage() {
  const comparison = [
    {
      aspect: "控制权",
      centralized: "由单一组织或实体控制",
      decentralized: "由网络参与者共同治理"
    },
    {
      aspect: "故障点",
      centralized: "单点故障风险高",
      decentralized: "无单点故障，抗审查"
    },
    {
      aspect: "透明度",
      centralized: "运营不透明",
      decentralized: "所有交易和规则公开可验证"
    },
    {
      aspect: "效率",
      centralized: "通常更高",
      decentralized: "可能较低但更公平"
    },
    {
      aspect: "创新速度",
      centralized: "快速决策",
      decentralized: "社区共识过程较慢"
    }
  ]

  const useCases = [
    {
      title: "去中心化金融(DeFi)",
      description: "无需中介的借贷、交易等金融服务"
    },
    {
      title: "去中心化自治组织(DAO)",
      description: "社区驱动的组织决策和资金管理"
    },
    {
      title: "去中心化存储",
      description: "文件分布式存储，避免单点故障"
    },
    {
      title: "去中心化身份",
      description: "用户完全控制自己的数字身份"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">中心化与去中心化区别</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">核心对比</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">比较维度</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">中心化系统</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">去中心化系统</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparison.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.aspect}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.centralized}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.decentralized}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* 优势 */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-bold mb-4 text-green-700">去中心化优势</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>抗审查和抗单点故障</li>
            <li>无需信任第三方</li>
            <li>全球无许可访问</li>
            <li>数据不可篡改</li>
            <li>用户掌握私钥和资产</li>
          </ul>
        </div>

        {/* 挑战 */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-bold mb-4 text-red-700">去中心化挑战</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>交易速度可能较慢</li>
            <li>用户体验复杂</li>
            <li>难以逆转错误交易</li>
            <li>监管不确定性</li>
            <li>能源消耗问题(PoW)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">实际应用案例</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">重要提示</h2>
        <p className="text-yellow-800">
          去中心化不是万能的，应根据具体场景选择合适的架构。完全去中心化可能带来效率损失，
          而过度中心化则可能牺牲安全性和抗审查性。理解这些权衡对构建和参与Web3至关重要。
        </p>
      </div>
    </div>
  )
}
