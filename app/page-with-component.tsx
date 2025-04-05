// app/page.tsxの代わりに使用する場合は、このファイルの内容をapp/page.tsxにコピーしてください

"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ContactButtons from "@/components/contact-buttons"
import InstagramLightWidget from "@/components/instagram-lightwidget"
import HeroVideo from "@/components/hero-video"

export default function Home() {
  const services = [
    {
      title: "トリミング",
      description: "愛犬の健康と美しさを保つプロフェッショナルなトリミングサービス",
      imageSrc: "/placeholder.svg?height=400&width=600&text=トリミング",
      href: "/trimming",
    },
    {
      title: "エステ",
      description: "ワンちゃんの肌と被毛を健やかに保つ特別なケアメニュー",
      imageSrc: "/placeholder.svg?height=400&width=600&text=エステ",
      href: "/esthetic",
    },
    {
      title: "ペットホテル",
      description: "安心して愛犬を預けられる快適な環境のペットホテル",
      imageSrc: "/placeholder.svg?height=400&width=600&text=ペットホテル",
      href: "/hotel",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[80vh] flex items-center">
        <HeroVideo
          videoSrc="/videos/hero-video.mp4"
          posterSrc="/placeholder.svg?height=800&width=1200&text=ARURU+DOG+MIMI"
          altText="ARURU DOG MIMI ペットサロン"
          showControls={false}
        />

        <div className="container mx-auto px-4 z-10">
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 max-w-xl">
            <div className="relative h-32 w-32 mx-auto mb-6">
              <Image
                src="/images/logo.png"
                alt="ARURU DOG MIMI ペットサロン ロゴ"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-teal-dark text-center mb-4">ARURU DOG MIMI</h1>
            <p className="text-center text-teal-dark/80 mb-6 leading-relaxed">
              飼い主様とワンちゃんが笑顔になれるサロン
              <br />
              愛情をもって丁寧に施術いたします
            </p>
            <div className="bg-teal-light/50 p-6 rounded-lg text-center">
              <Button
                asChild
                variant="teal-accent"
                size="xl"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <Link href="/access">ご予約はこちら</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 以下は変更なし */}
      <InstagramLightWidget />

      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-teal-dark mb-4">サービス紹介</h2>
            <p className="text-teal-dark/80 max-w-2xl mx-auto">
              ARURU DOG MIMIでは、トリミング、エステ、ペットホテルの各種サービスを提供しています。
              愛犬の健康と美しさを第一に考えた丁寧なケアをご提供いたします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-light" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-teal-dark mb-4">ご予約・お問い合わせ</h2>
            <p className="text-teal-dark/80 max-w-2xl mx-auto mb-8">
              ご予約はお電話または公式LINEから承っております。 お気軽にお問い合わせください。
            </p>
            <ContactButtons />
          </div>
        </div>
      </section>
    </div>
  )
}

