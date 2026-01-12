#!/usr/bin/env node

// GitHub Actions 专用部署脚本
// 这个脚本确保在 GitHub Actions 环境中正确部署

import { execSync } from 'child_process';

console.log('🚀 开始 GitHub Actions 部署流程...');

try {
  // 1. 检查 Wrangler 是否已安装
  console.log('📦 检查 Wrangler 安装...');
  execSync('wrangler --version', { stdio: 'inherit' });
  
  // 2. 部署到 Cloudflare Workers
  console.log('☁️ 部署到 Cloudflare Workers...');
  execSync('wrangler deploy', { stdio: 'inherit' });
  
  console.log('✅ 部署完成！');
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}