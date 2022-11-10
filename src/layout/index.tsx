import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './component/footer'
import Header from './component/header'
import { routes } from '@/router'
import { Suspense } from 'react'

const Layout = memo(() => {
  return (
    <div className="app">
      <div className="header">
        <Header></Header>
      </div>
      <Suspense fallback="loading">
        <div className="router">{useRoutes(routes)}</div>
      </Suspense>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  )
})

export default Layout
