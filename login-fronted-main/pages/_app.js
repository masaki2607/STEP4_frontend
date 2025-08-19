import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // 安全なコンポーネントレンダリング
  if (!Component) {
    return React.createElement('div', null, 'Loading...')
  }
  
  return React.createElement(Component, pageProps)
}
