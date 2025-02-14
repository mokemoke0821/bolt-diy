import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  // 日本語フォントのサポートを追加
  theme: {
    fontFamily: {
      sans: '"Noto Sans JP", sans-serif',
      serif: '"Noto Serif JP", serif',
    },
  },
  // カスタムユーティリティクラスの追加
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors',
    'input': 'px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
  },
})
