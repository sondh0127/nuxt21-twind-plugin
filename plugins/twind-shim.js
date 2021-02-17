/* eslint-disable import/no-duplicates */
import 'twind/shim'
import { setup, disconnect } from 'twind/shim'
import * as colors from 'twind/colors'
import { aspectRatio } from '@twind/aspect-ratio'
import { lineClamp } from '@twind/line-clamp'

setup({
  theme: {
    extend: {
      spacing: {
        192: '48rem',
        256: '64rem',
      },
      colors: {
        brand: colors.blue,
        cta: colors.red,
        info: colors.lightBlue,
        warning: colors.yellow,
        success: colors.green,
        danger: colors.rose,
      },
      screens: {
        landscape: { raw: '(orientation: landscape)' },
        portrait: { raw: '(orientation: portrait)' },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Inconsolata',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: {
    'aspect': aspectRatio,
    'line-clamp': lineClamp,
  },
})
