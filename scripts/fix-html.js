/**
 * prebuild 脚本：修补 Gemini AI Studio 生成的 index.html
 * - 移除 importmap（Vite 会从 node_modules 解析依赖）
 * - 添加 Vite 入口 <script type="module" src="/index.tsx">
 *
 * 这样即使 Gemini 同步覆盖了 index.html，构建仍然能正常工作。
 */
import { readFileSync, writeFileSync } from 'fs';

const htmlPath = 'index.html';
let html = readFileSync(htmlPath, 'utf-8');

// 移除 importmap script 块
html = html.replace(/<script type="importmap">[\s\S]*?<\/script>\s*/g, '');

// 如果缺少 Vite 入口脚本，在 </body> 前插入
if (!html.includes('src="/index.tsx"')) {
  html = html.replace('</body>', '    <script type="module" src="/index.tsx"></script>\n  </body>');
}

writeFileSync(htmlPath, html, 'utf-8');
console.log('[fix-html] index.html patched for Vite build');
