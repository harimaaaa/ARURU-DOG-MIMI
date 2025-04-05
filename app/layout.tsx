import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// SEO向けのメタデータを強化
export const metadata: Metadata = {
  title: "ARURU DOG MIMI | トリミング・エステ・ペットホテル | 愛知県刈谷市",
  description:
    "愛知県刈谷市のペットサロン ARURU DOG MIMI。トリミング、エステ、ペットホテルのサービスを提供。愛犬の健康と美しさを第一に考えた丁寧なケアをご提供いたします。",
  keywords: "ペットサロン, トリミング, ドッグエステ, ペットホテル, 愛知県, 刈谷市, 犬, ドッグサロン",
  authors: [{ name: "ARURU DOG MIMI" }],
  creator: "ARURU DOG MIMI",
  publisher: "ARURU DOG MIMI",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "https://www.aruru-dog-mimi.com",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.aruru-dog-mimi.com",
    title: "ARURU DOG MIMI | トリミング・エステ・ペットホテル | 愛知県刈谷市",
    description:
      "愛知県刈谷市のペットサロン ARURU DOG MIMI。トリミング、エステ、ペットホテルのサービスを提供。愛犬の健康と美しさを第一に考えた丁寧なケアをご提供いたします。",
    siteName: "ARURU DOG MIMI",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARURU DOG MIMI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARURU DOG MIMI | トリミング・エステ・ペットホテル | 愛知県刈谷市",
    description: "愛知県刈谷市のペットサロン ARURU DOG MIMI。トリミング、エステ、ペットホテルのサービスを提供。",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        {/* 構造化データを追加 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ARURU DOG MIMI",
              image: "https://www.aruru-dog-mimi.com/images/logo.png",
              "@id": "https://www.aruru-dog-mimi.com",
              url: "https://www.aruru-dog-mimi.com",
              telephone: "0566-70-7397",
              priceRange: "¥¥",
              address: {
                "@type": "PostalAddress",
                streetAddress: "一ツ木町4ー7ー11",
                addressLocality: "刈谷市",
                addressRegion: "愛知県",
                postalCode: "448-0007",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.0003611,
                longitude: 137.0068825,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://www.instagram.com/aruru_dog_mimi/"],
              description:
                "愛知県刈谷市のペットサロン ARURU DOG MIMI。トリミング、エステ、ペットホテルのサービスを提供。",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "ペットサービス",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "トリミング",
                      description: "愛犬の健康と美しさを保つプロフェッショナルなトリミングサービス",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "エステ",
                      description: "ワンちゃんの肌と被毛を健やかに保つ特別なケアメニュー",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ペットホテル",
                      description: "安心して愛犬を預けられる快適な環境のペットホテル",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-kaisei min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'