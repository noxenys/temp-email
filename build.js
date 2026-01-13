// 构建脚本 - 将src目录下的模块打包成worker.js
import { build } from 'esbuild';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

// 获取所有JavaScript文件
function getJSFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = join(currentDir, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.js') && !item.endsWith('.test.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

async function buildWorker() {
  const entryPoints = getJSFiles('./src');
  
  try {
    await build({
      entryPoints: entryPoints,
      bundle: true,
      outfile: 'worker.js',
      format: 'esm',
      platform: 'neutral',
      target: 'es2022',
      external: [],
      minify: false,
      sourcemap: true,
      legalComments: 'none',
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    });
    
    console.log('✅ Worker构建成功');
  } catch (error) {
    console.error('❌ Worker构建失败:', error);
    process.exit(1);
  }
}

// 如果是直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  buildWorker();
}

export { buildWorker };