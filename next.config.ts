import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";
import type { RuleSetRule } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

const nextConfig: NextConfig = {
  experimental: {
    // 解决FOUC问题。服务端页面注入CSS给到浏览器
    // 启用 CSS 优化。TailwindCSS 自动提取关键 CSS 并内联到 HTML
    // CSS 压缩和优化
    optimizeCss: true,
  },
  // compiler: {
  //   // 开启CSS in JS
  //   styledComponents: true,
  // },
  webpack: (config, { isServer, dev, webpack }) => {

    // 启用分析工具
    if (process.env.ANALYZE === 'true') {
      // 添加打包分析插件
      config.plugins?.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: '../analyze/report.html',
          openAnalyzer: false,
        })
      );
    }

    // 配置thread-loader多线程打包
    if (!isServer && !dev) {
      config.module?.rules?.forEach((rule: RuleSetRule) => {
        if (rule && rule.test instanceof RegExp && rule.test.test('.tsx')) {
          rule.use = [
            {
              loader: 'thread-loader',
              options: {
                workers: 4,
                workerParallelJobs: 50,
              },
            },
            ...(Array.isArray(rule.use) ? rule.use : []),
          ];
        }
      });
    }

    // 启用持久化缓存
    config.cache = !dev ? {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    } : false;

    // 配置terser压缩
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: true,
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ],
        // splitChunks
        splitChunks: {
          chunks: 'all',
          maxSize: 244 * 1024,
          automaticNameDelimiter: '.',
        },
      };
    }

    // 开发环境不使用hash，生产环境使用hash
    if (!dev) {
      config.output = {
        ...config.output,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
      };
    }

    // 使用SpeedMeasurePlugin包装配置（如果启用分析）
    if (process.env.ANALYZE === 'true') {
      const smp = new SpeedMeasurePlugin();
      return smp.wrap(config);
    }

    // 开发环境。开启souce-map
    if (dev) {
      config.devtool = 'source-map'
    }

    return config;
  },
};

export default nextConfig;
