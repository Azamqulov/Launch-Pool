export default defineAppConfig({
  ui: {
    primary: 'primaryColor',
    gray: 'neutral',

    button: {
      base: 'transition',
      default: {
        size: 'xl',
      },
      variant: {
        link: 'hover:opacity-70',
      },
    },

    slideover: {
      overlay: {
        background: 'dark:bg-black/40',
      },
      background: 'dark:bg-[#242424]',
    },
  },
})
