import React from 'react'

export default function CreateAssetsPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">创建数字资产</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* 创建步骤 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">创建步骤</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>选择资产类型（FT/NFT/SFT）</li>
            <li>配置资产参数（名称、符号、总量等）</li>
            <li>设置权限和访问控制</li>
            <li>部署智能合约</li>
            <li>验证和测试资产功能</li>
          </ol>
        </div>

        {/* 资产类型 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">资产类型</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">同质化代币 (FT)</h3>
              <p>可互换的数字资产，如加密货币，每个代币价值相同</p>
            </div>
            <div>
              <h3 className="font-bold">非同质化代币 (NFT)</h3>
              <p>独一无二的数字资产，如数字艺术品、收藏品等</p>
            </div>
            <div>
              <h3 className="font-bold">半同质化代币 (SFT)</h3>
              <p>具有相同类型但不同属性的代币，如游戏道具</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">注意事项</h2>
        <p className="text-yellow-800">
          创建资产前请确保了解相关法律法规，并准备好足够的Gas费用。建议在测试网先进行测试。
        </p>
      </div>
    </div>
  )
}
