import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // 安全なコンポーネントレンダリング
  if (!Component) {
    return <div>Loading...</div>
  }

  // propsが有効なオブジェクトであることを確認
  const safeProps = pageProps && typeof pageProps === 'object' ? pageProps : {}
  
  try {
    return <Component {...safeProps} />
  } catch (error) {
    console.error('App component render error:', error)
    return <div>Error loading page</div>
  }
}