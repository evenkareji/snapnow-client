import axios from 'axios';
import { useRouter } from 'next/router';
import getToken from '../../utils/getToken';
export async function getServerSideProps(context) {
  // URLクエリからtokenを取得
  const { token } = context.query;
  // tokenをコンソールにログ出力

  // 必要に応じてtokenを使ってサーバーサイドで何か処理を行う

  // propsとしてページコンポーネントに渡すデータを返す
  return { props: { token } };
}

function Activate({ token }) {
  const router = useRouter();
  const loginToken = getToken();

  const activateAccount = async () => {
    try {
      await axios.post(
        `/api/users/activate`,
        {
          token,
        },
        { headers: { Authorization: `Bearer ${loginToken}` } },
      );

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  // tokenをページコンポーネントで使うか、何か表示に使うことができます
  return (
    <div>
      <button onClick={activateAccount}>わかった</button>
    </div>
  );
}

export default Activate;
