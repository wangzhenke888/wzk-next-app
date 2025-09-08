import React from 'react'

const technologies = [
  {
    name: 'React/Next.js',
    description: '用于构建用户界面的JavaScript库和框架',
    features: [
      '组件化开发',
      '服务端渲染(SSR)',
      '静态生成(SSG)',
      'API路由'
    ],
    code: `// Next.js页面示例
export default function Home() {
  return (
    <div>
      <h1>欢迎使用Web3钱包</h1>
      <WalletConnector />
    </div>
  )
}`
  },
  {
    name: 'Ethers.js',
    description: '以太坊区块链交互的完整解决方案',
    features: [
      '与智能合约交互',
      '钱包管理',
      '交易签名',
      '事件监听'
    ],
    code: `// 连接钱包示例
import { ethers } from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()`
  },
  {
    name: 'Wagmi',
    description: 'React Hooks for Ethereum',
    features: [
      '钱包连接管理',
      '链状态查询',
      '交易发送',
      '合约交互'
    ],
    code: `// 使用Wagmi hooks
import { useAccount, useConnect } from 'wagmi'

function ConnectButton() {
  const { connect, connectors } = useConnect()
  const { isConnected } = useAccount()
  
  return (
    <button onClick={() => connect({ connector: connectors[0] })}>
      {isConnected ? '已连接' : '连接钱包'}
    </button>
  )
}`
  }
]

export default function TechnologiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Web3技术栈</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-3">{tech.name}</h2>
            <p className="mb-4 text-gray-700">{tech.description}</p>
            
            <h3 className="font-bold mb-2">主要功能:</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {tech.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="bg-gray-800 rounded p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm">
                <code>{tech.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">官方文档链接</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:underline">
              Next.js 文档
            </a>
          </li>
          <li>
            <a href="https://docs.ethers.org/v5/" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              Ethers.js 文档
            </a>
          </li>
          <li>
            <a href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              Wagmi 文档
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold mb-3">学习建议</h2>
        <p className="text-blue-800">
          建议从React/Next.js开始学习，掌握基础后再深入Ethers.js和Wagmi。
          实际项目开发中，这些技术通常需要结合使用才能构建完整的Web3应用。
        </p>
      </div>
    </div>
  )
}
