// 测试网站是否正常工作
import https from 'https';

const url = 'https://temp-email.ddyy0256.workers.dev';

console.log('正在测试网站访问...');
console.log('URL:', url);

const req = https.get(url, (res) => {
  console.log('状态码:', res.statusCode);
  console.log('响应头:', res.headers);
  
  if (res.statusCode === 200) {
    console.log('✅ 网站访问成功！');
    console.log('✅ Cloudflare Workers 部署正常！');
  } else {
    console.log('⚠️ 网站返回状态码:', res.statusCode);
  }
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('响应内容长度:', data.length, '字节');
    if (data.length > 0) {
      console.log('响应内容预览:', data.substring(0, 200));
    }
    console.log('✅ 测试完成！');
    process.exit(0);
  });
});

req.on('error', (error) => {
  console.error('❌ 访问网站时出错:', error.message);
  process.exit(1);
});

req.setTimeout(10000, () => {
  console.error('❌ 请求超时');
  req.destroy();
  process.exit(1);
});