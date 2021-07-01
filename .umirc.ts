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
  copy: [
    {
      from: 'src/utils/sql-wasm.wasm',
      to: './',
    },
    {
      from: 'src/utils/bi_test_data.sqlite',
      to: './',
    },
  ],
});
