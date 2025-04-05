"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ContactButtons from "@/components/contact-buttons"
import InstagramLightWidget from "@/components/instagram-lightwidget"
import YouTubeBackground from "@/components/youtube-background"

export default function Home() {
  const services = [
    {
      title: "トリミング",
      description: "愛犬の健康と美しさを保つプロフェッショナルなトリミングサービス",
      imageSrc: "/images/trimming-service.png",
      href: "/trimming",
    },
    {
      title: "エステ",
      description: "ワンちゃんの肌と被毛を健やかに保つ特別なケアメニュー",
      imageSrc: "/images/esthetic-service.png",
      href: "/esthetic",
    },
    {
      title: "ペットホテル",
      description: "安心して愛犬を預けられる快適な環境のペットホテル",
      imageSrc: "/images/hotel-service.png",
      href: "/hotel",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[80vh] flex items-center">
        {/* YouTubeの動画IDを指定 */}
        <YouTubeBackground videoId="G32DqbtstJ4" muted={true} loop={true} overlay={true} overlayOpacity={0.3} />

        <div className="container mx-auto px-4 z-10 relative">
          <div className="p-8 md:p-12 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white text-center mb-4 drop-shadow-lg">
              ARURU DOG MIMI
            </h1>
            <p className="text-center text-white mb-6 leading-relaxed drop-shadow-lg">
              飼い主様とワンちゃんが笑顔になれるサロン
              <br />
              愛情をもって丁寧に施術いたします
            </p>
            <Link href="/access" className="block">
              <div className="p-6 text-center">
                <Button
                  variant="teal-accent"
                  size="xl"
                  className="transform hover:scale-105 transition-transform duration-200"
                >
                  ご予約はこちら
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* LightWidgetを使用したInstagramフィード */}
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

