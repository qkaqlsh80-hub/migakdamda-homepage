import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "미각담다 | 계절의 맛을 담은 한식 다이닝",
  description: "계절의 맛을 정갈하게 담아내는 한식 다이닝, 미각담다입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
