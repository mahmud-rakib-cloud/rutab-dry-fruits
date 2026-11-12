import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rutab Dry Fruits | প্রিমিয়াম মানের ড্রাই ফ্রুটস ও পুষ্টিকর খাবার",
    template: "%s | Rutab Dry Fruits",
  },
  description:
    "Rutab Dry Fruits-এ আপনাকে স্বাগতম। আমরা বাছাইকৃত সেরা মানের খেজুর, বাদাম, কিশমিশ ও স্বাস্থ্যসম্মত ড্রাই ফ্রুটস সরাসরি আপনার দোরগোড়ায় পৌঁছে দিই।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased">
      <body className={`${hindSiliguri.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}