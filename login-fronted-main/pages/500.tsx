export default function Custom500() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>500 - サーバーエラー</h1>
      <p>サーバーでエラーが発生しました。</p>
      <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
        ログインページに戻る
      </a>
    </div>
  )
}
