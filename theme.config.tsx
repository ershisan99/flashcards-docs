import React from 'react'

import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Flashcards docs</span>,
  project: {
    link: 'https://github.com/ershisan99/cards-front-new/tree/master',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ru', text: 'Русский' },
  ],
  docsRepositoryBase: 'https://github.com/ershisan99/flashcards-docs',
  footer: {
    text: 'Powered by Nextra',
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter()

      if (locale === 'ru') {
        return 'Поиск...'
      }

      return 'Search...'
    },
  },
  toc: {
    title: () => {
      const { locale } = useRouter()

      if (locale === 'ru') {
        return <>Cодержание</>
      }

      return <>On This Page</>
    },
  },
  editLink: {
    // @ts-ignore
    text: () => {
      const { locale } = useRouter()

      if (locale === 'ru') {
        return 'Редактировать эту страницу'
      }

      return 'Edit this page'
    },
  },
  feedback: {
    // @ts-ignore
    content: () => {
      const { locale } = useRouter()

      if (locale === 'ru') {
        return 'Отправить отзыв'
      }

      return 'Send feedback'
    },
  },
}

export default config
