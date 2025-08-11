//ログアウトページも一応入れておきます。
//トークンの削除は、フロント側だけでできるので、このファイルを削除すれば、トークン保存の設定は残ります。

// pages/logout.tsx
import { useRouter } from "next/router";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // トークン削除（localStorage または必要に応じて sessionStorage）
    localStorage.removeItem("token");
    // ログインページへ遷移
    router.replace("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">ログアウトはこちら</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
      >
        ログアウト
      </button>
    </div>
  );
}