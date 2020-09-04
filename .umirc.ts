import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  antd: {},
  dva: {
    immer: true,
    hmr: false,
  },
  proxy: {
    '/api': {
      target: 'https://a.b.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一id
          entry: 'http://localhost:8001', // html entry
        },
      ],
    },
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/dashboard/analysis', microApp: 'app1' }, // 微前端的子页面路由
  ],
});
