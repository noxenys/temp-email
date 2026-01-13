#!/usr/bin/env node

// 简化的 GitHub Actions 部署脚本
// 专注于基本部署，避免复杂的数据库操作

import { execSync } from 'child_process';

console.log('🚀 开始简化部署流程...');

try {
  // 1. 检查 Wrangler 是否可用
  console.log('📦 检查 Wrangler 可用性...');
  execSync('npx wrangler --version', { stdio: 'inherit' });
  
  // 2. 设置 Cloudflare 认证
  console.log('🔐 设置 Cloudflare 认证...');
  if (process.env.CLOUDFLARE_API_TOKEN && process.env.CLOUDFLARE_ACCOUNT_ID) {
    process.env.CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
    process.env.CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
    console.log('✅ Cloudflare 认证已设置');
  } else {
    console.warn('⚠️ Cloudflare 认证信息未提供');
  }
  
  // 3. 设置环境变量
  console.log('🔧 设置环境变量...');
  const envVars = [
    // 必需环境变量
    { name: 'ADMIN_PASSWORD', value: process.env.ADMIN_PASSWORD },
    { name: 'JWT_TOKEN', value: process.env.JWT_TOKEN },
    { name: 'JWT_SECRET', value: process.env.JWT_SECRET },
    { name: 'MAIL_DOMAIN', value: process.env.MAIL_DOMAIN },
    { name: 'D1_DATABASE_ID', value: process.env.D1_DATABASE_ID },
    
    // 可选环境变量
    { name: 'GUEST_PASSWORD', value: process.env.GUEST_PASSWORD },
    { name: 'ADMIN_USERNAME', value: process.env.ADMIN_USERNAME },
    { name: 'ADMIN_PASS', value: process.env.ADMIN_PASS },
    { name: 'RESEND_API_KEY', value: process.env.RESEND_API_KEY },
    { name: 'RESEND_TOKEN', value: process.env.RESEND_TOKEN },
    { name: 'FORWARD_RULES', value: process.env.FORWARD_RULES },
    { name: 'CACHE_TTL', value: process.env.CACHE_TTL }
  ];
  
  for (const envVar of envVars) {
    if (envVar.value) {
      try {
        execSync(`npx wrangler secret put ${envVar.name}`, {
          input: envVar.value,
          stdio: ['pipe', 'inherit', 'inherit']
        });
        console.log(`✅ 已设置环境变量: ${envVar.name}`);
      } catch (error) {
        console.warn(`⚠️ 设置环境变量 ${envVar.name} 失败:`, error.message);
      }
    } else {
      console.log(`ℹ️ 未提供环境变量: ${envVar.name}`);
    }
  }
  
  // 4. 直接部署到 Cloudflare Workers
  console.log('☁️ 部署到 Cloudflare Workers...');
  execSync('npx wrangler deploy --env production', { stdio: 'inherit' });
  
  console.log('✅ 简化部署完成！');
  console.log('💡 注意：数据库初始化需要在 Cloudflare Dashboard 中手动完成');
  
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}