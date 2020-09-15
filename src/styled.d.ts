import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    fontLight: number
    fontBold: number
    colors: {
      gray: string
      red: string
      blue: string
      green: string
      yellow: string
    }
  }
}