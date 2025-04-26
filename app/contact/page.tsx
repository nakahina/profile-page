"use client";

import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Hobby = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("すべての項目を入力してください。");
      setSuccess("");
      return;
    }

    try {
      await emailjs.send(
        "service_luzsevf", // サービスID
        "template_dzv8hp7", // テンプレートID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "d4vLAsi6Ut5SiLyIm" // パブリックキー
      );

      setSuccess("送信しました！ありがとうございます。");
      setError("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("送信に失敗しました。後ほどお試しください。");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <div className="rounded-lg p-10 bg-blue-500 shadow-xl shadow-blue-500/50 flex items-center justify-center flex-col w-lg">
        <div className="text-white w-full max-w-md">
          <div className="mb-5">
            <div className="font-bold mb-3 text-2xl text-center">
              お問い合わせ
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="お名前"
              className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="メッセージ"
              className="p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-300 h-50 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-white text-sm">{success}</div>}

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-white font-bold shadow-lg duration-300"
            >
              送信する
            </button>
          </form>

          <Link href="/">
            <div className="mt-5 font-bold bg-blue-800 hover:bg-blue-900 p-3 rounded-md text-center shadow-lg duration-300">
              戻る
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
