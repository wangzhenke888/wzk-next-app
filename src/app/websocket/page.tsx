"use client";

import React, { useState, useRef, useEffect } from 'react';

const WebsocketPage = () => {
  // 左侧聊天框状态（用户A）
  const [leftMessages, setLeftMessages] = useState<string[]>([]);
  const [leftInput, setLeftInput] = useState('');
  const leftInputRef = useRef<HTMLInputElement>(null);
  
  // 右侧聊天框状态（用户B）
  const [rightMessages, setRightMessages] = useState<string[]>([]);
  const [rightInput, setRightInput] = useState('');
  const rightInputRef = useRef<HTMLInputElement>(null);
  
  // 模拟用户A发送消息
  const sendLeftMessage = () => {
    if (!leftInput.trim()) return;
    
    // 添加到左侧聊天框（用户A发出的消息）
    setLeftMessages(prev => [...prev, `我: ${leftInput}`]);
    
    // 添加到右侧聊天框（模拟用户B收到消息）
    setRightMessages(prev => [...prev, `用户A: ${leftInput}`]);
    
    // 清空输入框
    setLeftInput('');
    if (leftInputRef.current) leftInputRef.current.focus();
  };
  
  // 模拟用户B发送消息
  const sendRightMessage = () => {
    if (!rightInput.trim()) return;
    
    // 添加到右侧聊天框（用户B发出的消息）
    setRightMessages(prev => [...prev, `我: ${rightInput}`]);
    
    // 添加到左侧聊天框（模拟用户A收到消息）
    setLeftMessages(prev => [...prev, `用户B: ${rightInput}`]);
    
    // 清空输入框
    setRightInput('');
    if (rightInputRef.current) rightInputRef.current.focus();
  };
  
  // 面试问答形式的WebSocket介绍
  const interviewQuestions = [
    {
      question: "什么是WebSocket？它与HTTP有什么区别？",
      answer: "WebSocket是一种在单个TCP连接上进行全双工通信的协议。与HTTP不同，它提供了持久的连接，允许服务器主动向客户端推送数据，而不需要客户端轮询。"
    },
    {
      question: "WebSocket的主要优点是什么？",
      answer: "主要优点包括：1) 实时双向通信；2) 减少延迟；3) 降低服务器负载（相比HTTP轮询）；4) 更高效的数据传输（较少的头部开销）。"
    },
    {
      question: "WebSocket适合哪些应用场景？",
      answer: "适合需要实时更新的应用，如聊天应用、实时游戏、金融交易系统、协作编辑工具、实时数据仪表盘等。"
    },
    {
      question: "如何建立WebSocket连接？",
      answer: "客户端发起一个HTTP升级请求（Upgrade头），服务器响应101状态码表示协议切换成功，之后连接就升级为WebSocket连接。"
    },
    {
      question: "WebSocket连接的生命周期是怎样的？",
      answer: "1) 握手阶段（HTTP升级）；2) 数据传输阶段（双向通信）；3) 关闭阶段（通过关闭帧正常终止连接）。"
    },
    {
      question: "如何处理WebSocket连接中断？",
      answer: "可以通过监听onclose事件，实现自动重连机制（如指数退避算法），并在重新连接后恢复状态。"
    }
  ];

  return (
    <div className="flex flex-col h-full p-4">
      {/* WebSocket面试问答部分 */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">WebSocket面试指南</h1>
        
        {interviewQuestions.map((item, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-semibold text-lg text-blue-600">Q: {item.question}</h2>
            <p className="ml-4 text-gray-700">A: {item.answer}</p>
          </div>
        ))}
        
        <p className="mt-4 text-sm text-gray-500">
          本页面模拟了WebSocket的双向通信功能，左侧和右侧聊天框可以互相发送消息。
        </p>
      </div>

      {/* 双聊天框布局 */}
      <div className="flex-1 flex gap-6">
        {/* 左侧聊天框 - 用户A */}
        <div className="flex-1 flex flex-col border rounded-lg p-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">用户A</h2>
          
          <div className="flex-1 mb-4 p-4 bg-white border rounded-lg h-64 overflow-y-auto">
            {leftMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 p-3 rounded-lg ${
                  msg.startsWith('我:') 
                    ? 'ml-auto bg-blue-500 text-white max-w-[80%]' 
                    : 'mr-auto bg-gray-200 max-w-[80%]'
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
          
          <div className="flex">
            <input
              ref={leftInputRef}
              type="text"
              value={leftInput}
              onChange={(e) => setLeftInput(e.target.value)}
              placeholder="输入消息..."
              className="flex-1 p-2 border rounded-l"
              onKeyDown={(e) => e.key === 'Enter' && sendLeftMessage()}
            />
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
              onClick={sendLeftMessage}
            >
              发送
            </button>
          </div>
        </div>
        
        {/* 右侧聊天框 - 用户B */}
        <div className="flex-1 flex flex-col border rounded-lg p-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">用户B</h2>
          
          <div className="flex-1 mb-4 p-4 bg-white border rounded-lg h-64 overflow-y-auto">
            {rightMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 p-3 rounded-lg ${
                  msg.startsWith('我:') 
                    ? 'ml-auto bg-green-500 text-white max-w-[80%]' 
                    : 'mr-auto bg-gray-200 max-w-[80%]'
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
          
          <div className="flex">
            <input
              ref={rightInputRef}
              type="text"
              value={rightInput}
              onChange={(e) => setRightInput(e.target.value)}
              placeholder="输入消息..."
              className="flex-1 p-2 border rounded-l"
              onKeyDown={(e) => e.key === 'Enter' && sendRightMessage()}
            />
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-r"
              onClick={sendRightMessage}
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsocketPage;
