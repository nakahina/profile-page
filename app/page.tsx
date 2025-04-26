import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <div className="rounded-lg py-5 px-12 bg-blue-500 shadow-lg shadow-blue-500/50 flex items-center justify-center flex-col w-lg">
        <Image
          className="rounded-full mb-5"
          src="/avator.png"
          alt="プロフィール画像"
          width={280}
          height={280}
        />
        <div className="text-white font-bold mb-3 text-lg">中村 日向子</div>
        <div className="flex justify-center gap-5 mb-5">
          <Link href="https://instagram.com/hinakoooooo_81_/" target="_blank">
            <FaInstagram
              size={28}
              className="text-white hover:text-blue-800 duration-300"
            />
          </Link>
          <Link href="https://github.com/nakahina" target="_blank">
            <FaGithub
              size={28}
              className="text-white hover:text-blue-800 duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hinako-nakamura-34aa82216/"
            target="_blank"
          >
            <FaLinkedin
              size={28}
              className="text-white hover:text-blue-800 duration-300"
            />
          </Link>
        </div>
        <div></div>
        <div className="text-white">
          <div className="mb-5">
            <div className="font-bold mb-2">自己紹介</div>
            渋谷のベンチャー企業でWEBエンジニアしています
            <br />
            主にTypeScript、React、Next.jsでの開発経験があります
          </div>
          <div className="mb-7">
            <div className="font-bold mb-2">趣味</div>
            餃子製造
          </div>
          <div className="flex w-full place-content-between">
            <Link href="/hobby">
              <div className="mb-5 w-48 font-bold  bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-center shadow-lg duration-300">
                もっと見る
              </div>
            </Link>
            <Link href="/contact">
              <div className="mb-5 w-48 font-bold  bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-center shadow-lg duration-300">
                問い合わせ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
