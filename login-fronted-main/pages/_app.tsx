import '../styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  // 安全なコンポーネントレンダリング
  if (!Component) {
    return <div>Loading...</div>
  }
  
  return <Component {...pageProps} />
}