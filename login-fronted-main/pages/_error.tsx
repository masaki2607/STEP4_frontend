function Error({ statusCode }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>
        {statusCode
          ? `サーバーエラー ${statusCode} が発生しました`
          : 'クライアントエラーが発生しました'}
      </h1>
      <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
        ログインページに戻る
      </a>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
