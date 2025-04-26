import Link from "next/link";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiWordpress,
  SiNestjs,
} from "react-icons/si";
import Image from "next/image";

const Hobby = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <div className="rounded-lg p-10 bg-blue-500 shadow-xl shadow-blue-500/50 flex items-center justify-center flex-col w-lg">
        <div className="text-white">
          <div className="mb-10">
            <div className="font-bold mb-1 text-lg">スキル</div>
            <div className="mb-3 text-sm">
              TypeScript、React、Next.jsを用いたモダンなフロントエンド開発
              <br />
              WordPress や PHP、PostgreSQL を用いたバックエンド・CMS構築
            </div>
            <div className="flex gap-5">
              <SiTypescript
                size={40}
                className="text-white hover:text-blue-300 duration-300"
              />
              <SiReact
                size={40}
                className="text-white hover:text-cyan-300 duration-300"
              />
              <SiNextdotjs
                size={40}
                className="text-white hover:text-gray-300 duration-300"
              />
              <SiPhp
                size={40}
                className="text-white hover:text-gray-300 duration-300"
              />
              <SiPostgresql
                size={40}
                className="text-white hover:text-gray-300 duration-300"
              />
              <SiWordpress
                size={40}
                className="text-white hover:text-gray-300 duration-300"
              />
              <SiNestjs
                size={40}
                className="text-white hover:text-gray-300 duration-300"
              />
            </div>
          </div>
          <div className="mb-7 w-full">
            <div className="font-bold mb-lg w-full mb-2 text-lg">趣味</div>
            <div className="flex w-full gap-5">
              <Image
                className="rounded-md shadow-lg"
                src="/dumpling.jpg"
                alt="餃子"
                width={200}
                height={10}
              />

              <div>
                <div className="font-semibold text-md">餃子製造</div>
                <div className="text-sm">
                  <br />
                  月１で餃子を大量に作ります
                  <br />
                  仕事終わりの餃子と生ビールに勝るものはありません
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mb-7 w-full">
            <div className="font-bold mb-lg w-full mb-2 text-lg">ブログ</div>
          </div> */}

          <Link href="/">
            <div className="mb-5 font-bold  bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-center shadow-lg duration-300">
              戻る
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
