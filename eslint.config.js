import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Ignorar carpetas globales
  {
    ignores: ['dist/', '.astro/', 'node_modules/']
  },
  // Configuración de reglas normal...
  ...eslintPluginAstro.configs.recommended,
];