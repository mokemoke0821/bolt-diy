import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
    },
  },
});
