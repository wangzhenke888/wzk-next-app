import React from 'react'

export default function DefiNftPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">DeFi & NFT 介绍</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Uniswap Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Uniswap</h2>
          <p className="mb-4">
            Uniswap是以太坊上领先的去中心化交易所(DEX)，采用自动做市商(AMM)模式。
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>无需注册或KYC</li>
            <li>流动性池代替订单簿</li>
            <li>UNI代币治理</li>
            <li>支持ERC-20代币交易</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-bold mb-2">实践操作:</h3>
            <p>1. 连接钱包</p>
            <p>2. 选择交易对</p>
            <p>3. 设置滑点容忍度</p>
            <p>4. 确认交易</p>
          </div>
        </div>

        {/* DeFi NFT Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">DeFi NFT</h2>
          <p className="mb-4">
            NFT金融化将非同质化代币引入去中心化金融领域，创造新的用例。
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">NFT抵押借贷</h3>
              <p>使用NFT作为抵押品获取贷款</p>
            </div>
            <div>
              <h3 className="font-bold">碎片化NFT</h3>
              <p>将高价值NFT分割为可交易的ERC-20代币</p>
            </div>
            <div>
              <h3 className="font-bold">NFT期权</h3>
              <p>为NFT价格波动提供对冲工具</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-bold mb-3">风险提示</h2>
        <p className="text-yellow-800">
          DeFi和NFT市场波动较大，请充分了解风险后再参与。智能合约漏洞、无常损失和监管变化都可能影响您的资产安全。
        </p>
      </div>
    </div>
  )
}
