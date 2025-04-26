import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <div className="rounded-lg p-10 bg-blue-500 shadow-lg shadow-blue-500/50 flex items-center justify-center flex-col">
        <Image
          className="rounded-full mb-5"
          src="/avator.png"
          alt="プロフィール画像"
          width={300}
          height={300}
        />
        <div className="text-white font-bold mb-5">中村 日向子</div>
        <div className="text-white">
          <div className="mb-5">
            <div className="font-bold mb-3">自己紹介</div>
            渋谷のベンチャー企業でWEBエンジニアしています👩🏻‍💻
            <br />
            主にTypeScript、React、Next.jsでの開発経験があります。
          </div>
          <div className="mb-7">
            <div className="font-bold mb-3">趣味</div>
            餃子製造
          </div>
          <Link href="/hobby">
            <div className="mb-5 font-bold  bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-center shadow-lg duration-300">
              もっと見る
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
