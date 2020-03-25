import * as React from 'react'
import NextApp from 'next/app'

import '../public/fonts.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
