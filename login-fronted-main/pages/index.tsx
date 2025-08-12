// pages/index.tsx
import { GetServerSideProps } from 'next';

export default function Index() {
  // このコンポーネントは実際にはレンダリングされません（リダイレクトのため）
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
