# MBTI Test 项目设计文档

## 项目概述

这是一个基于 Next.js 开发的 MBTI 性格测试应用，采用现代前端技术栈，支持响应式设计和深色模式。

## 技术栈

### 核心框架
- Next.js 15.1.0
- React 19.0.0
- TypeScript 5.x

### 样式解决方案
- Tailwind CSS 3.4.1
- PostCSS 8
- 支持深色模式
- 使用CSS变量管理主题

### 开发工具
- ESLint
- TypeScript
- Next.js 内置优化工具

## 项目结构 
├── src/
│ ├── app/
│ │ ├── layout.tsx # 应用布局文件
│ │ ├── page.tsx # 主页面
│ │ └── globals.css # 全局样式
│ ├── components/ # 组件目录
│ └── pages/ # 页面目录
├── public/ # 静态资源
└── [配置文件]
├── next.config.js # Next.js 配置
├── tailwind.config.ts # Tailwind 配置
├── tsconfig.json # TypeScript 配置
├── postcss.config.mjs # PostCSS 配置
└── eslint.config.mjs # ESLint 配置

## 技术要点

### 1. 应用架构
- 采用 Next.js App Router 架构
- 使用 TypeScript 确保类型安全
- 支持服务端渲染 (SSR)

### 2. 样式管理
- 使用 Tailwind CSS 实现原子化 CSS
- 通过 CSS 变量实现主题切换
- 支持深色模式自动适配

### 3. 开发规范
- 严格的 TypeScript 类型检查
- ESLint 确保代码质量
- 模块化的项目结构

### 4. 性能优化
- Next.js 内置的图片优化
- 自动代码分割
- 路由预加载

## 开发指南

### 环境要求
- Node.js 版本要求：支持 ES2017
- 包管理器：npm/yarn/pnpm/bun

### 开发命令
- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本
- `npm run start`: 启动生产服务器
- `npm run lint`: 运行代码检查

### 目录规范
- 组件放置在 `src/components` 目录
- 页面文件放置在 `src/app` 目录
- 公共资源放置在 `public` 目录

## 部署说明

推荐使用 Vercel 平台部署：
- 自动化部署流程
- 集成 Next.js 优化
- 全球 CDN 分发

## 注意事项

1. 代码规范
   - 遵循 TypeScript 严格模式
   - 使用 ESLint 规则检查
   - 保持组件的单一职责

2. 性能考虑
   - 合理使用客户端组件
   - 注意图片优化
   - 控制包体积

3. 可访问性
   - 支持深色模式
   - 考虑响应式设计
   - 保持良好的语义化结构