import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Headings, Code, Blockquote, PrismSetup} from './src/components/Complete'
import {GlobalStyle} from "./src/themes/global-style";
import {ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme} from "./src/themes/Themes";

const components = {
h2: Headings.myH2,
h4: Headings.myH4,
inlineCode: Code,
blockquote: Blockquote,
pre: PrismSetup,
}

export const wrapMDX = ({element}) => {
  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  <MDXProvider components={components}> 
  <GlobalStyle/>
  {element}
  </MDXProvider>
  </ThemeProvider>
}
