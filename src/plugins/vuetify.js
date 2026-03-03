import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976d2',
          surface: '#ffffff',
          'surface-bright': '#ffffff',
          'surface-variant': '#f5f5f5',
        },
      },
    },
  },
})
