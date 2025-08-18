export default function Custom404() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
        ログインページに戻る
      </a>
    </div>
  )
}
