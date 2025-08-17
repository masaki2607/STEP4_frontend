// pages/index.tsx

export default function Index() {
  // このコンポーネントは実際にはレンダリングされません（リダイレクトのため）
  return null;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
