import { defineConfig } from 'umi';

export default defineConfig({
  title: 'react-echarts-dashboard',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  theme: {
    '@primary-color': '#6967f6',
  },
});
