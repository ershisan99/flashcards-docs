const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
})
