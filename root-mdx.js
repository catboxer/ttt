import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {AppProvider} from './src/components/context'
import {Code, Blockquote, PrismSetup} from './src/components/Complete'
import {GlobalStyle} from "./src/themes/global-style";



const components = {
// h2: Headings.myH2,
// h4: Headings.myH4,
inlineCode: Code,
blockquote: Blockquote,
pre: PrismSetup,
}

export const wrapMDX = ({element}) => {
  return <AppProvider>
  <MDXProvider components={components}> 
  <GlobalStyle/>
  {element}
  </MDXProvider>
  </AppProvider>
}
