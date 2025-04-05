import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Car } from "lucide-react"
import ContactButtons from "@/components/contact-buttons"

// SEO向けのメタデータを設定
export const metadata: Metadata = {
  title: "アクセス・ご予約 | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
  description:
    "愛知県刈谷市のペットサロン ARURU DOG MIMIへのアクセス情報とご予約方法。お電話またはLINEでのご予約を承っております。愛知県刈谷市一ツ木町4ー7ー11に位置し、駐車場も完備。",
  keywords: "ペットサロン, アクセス, 予約, 電話予約, 愛知県, 刈谷市, 一ツ木町",
  openGraph: {
    title: "アクセス・ご予約 | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
    description:
      "愛知県刈谷市のペットサロン ARURU DOG MIMIへのアクセス情報とご予約方法。お電話またはLINEでのご予約を承っております。",
    url: "https://www.aruru-dog-mimi.com/access",
    images: [
      {
        url: "/images/store-front.jpeg",
        width: 1200,
        height: 630,
        alt: "ARURU DOG MIMI 店舗外観",
      },
    ],
  },
}

export default function AccessPage() {
  const businessHours = [
    { day: "月曜日", hours: "09:00 - 18:00" },
    { day: "火曜日", hours: "09:00 - 18:00" },
    { day: "水曜日", hours: "09:00 - 18:00" },
    { day: "木曜日", hours: "09:00 - 18:00" },
    { day: "金曜日", hours: "09:00 - 18:00" },
    { day: "土曜日", hours: "09:00 - 18:00" },
    { day: "日曜日", hours: "09:00 - 18:00" },
    { day: "祝日", hours: "09:00 - 18:00" },
  ]

  return (
    <div className="bg-white">
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/store-front.jpeg"
            alt="ARURU DOG MIMI 店舗外観"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 max-w-xl text-center">
          <h1 className="text-3xl font-medium text-teal-dark mb-2">アクセス・ご予約</h1>
          <p className="text-teal-dark/80">店舗情報とご予約方法のご案内</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="border-none shadow-md bg-white h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-2xl">店舗情報</CardTitle>
                <CardDescription>ARURU DOG MIMIへのアクセス情報</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal rounded-full p-2 flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-dark mb-1">住所</p>
                    <p className="text-teal-dark/80">〒448-0007</p>
                    <p className="text-teal-dark/80">愛知県刈谷市一ツ木町4ー7ー11</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal rounded-full p-2 flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-dark mb-1">電話番号</p>
                    <p className="text-teal-dark/80">0566-70-7397</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal rounded-full p-2 flex-shrink-0 mt-1">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-dark mb-1">駐車場</p>
                    <p className="text-teal-dark/80">店舗前に2台分の駐車場あり</p>
                    <p className="text-teal-dark/80">満車の場合は別の駐車場をご案内いたします</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal rounded-full p-2 flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-teal-dark mb-2">営業時間</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-teal-dark/80">
                      {businessHours.map((item) => (
                        <div key={item.day} className="flex justify-between border-b border-teal/10 pb-1">
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-teal-dark/80 mt-2 font-medium">年中無休で営業しております</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.8982853839!2d137.0068825!3d35.0003611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376e7a4330001%3A0x60e94b93f2a9e6f0!2z44CSNDQ4LTAwMDcg5oSb55-l55yM5YiI6LC35biC5LiA44OE5pyo55S677yU4oiS77yX4oiS77yR77yR!5e0!3m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="ARURU DOG MIMI 地図"
            ></iframe>
          </div>
        </div>

        {/* 残りのコンテンツは変更なし */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">ご予約方法</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-xl">お電話でのご予約</CardTitle>
                <CardDescription>営業時間内にお電話ください</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-teal-dark/80 leading-relaxed">
                  トリミング、エステ、ペットホテルのご予約は、お電話で承っております。
                  ご希望の日時やサービス内容をお伝えください。
                </p>
                <Button asChild variant="outline" className="w-full border-teal text-teal hover:bg-teal/5">
                  <Link href="tel:0566707397" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>0566-70-7397</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-xl">LINEでのご予約</CardTitle>
                <CardDescription>24時間いつでもご予約可能</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-teal-dark/80 leading-relaxed">
                  公式LINEからもご予約いただけます。 ご希望の日時やサービス内容を詳しくお知らせください。
                  スタッフが確認次第、ご返信いたします。
                </p>
                <Button asChild variant="teal-accent" className="w-full">
                  <Link
                    href="https://lin.ee/bLA1eDC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    <span>LINE予約</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">よくあるご質問</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-lg">予約はどのくらい前にすればいいですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-dark/80 leading-relaxed">
                  トリミングは1週間前、ペットホテルは2週間前のご予約をおすすめしています。
                  特に土日祝日や長期休暇期間は混み合いますので、お早めのご予約をお願いいたします。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-lg">初めて利用する際に必要なものはありますか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-dark/80 leading-relaxed">
                  初回ご利用時には、混合ワクチン・狂犬病接種証明書のご持参をお願いしております。
                  また、ワンちゃんの健康状態や性格などについてお伺いしますので、少しお時間をいただきます。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-lg">キャンセルはいつまでにすればいいですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-dark/80 leading-relaxed">
                  キャンセルは前日までにご連絡いただければ、キャンセル料は発生いたしません。
                  当日のキャンセルは、キャンセル料が発生する場合がございますので、ご了承ください。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-lg">トリミング中に立ち会うことはできますか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-dark/80 leading-relaxed">
                  ワンちゃんの安全を第一に考え、トリミング中のご立ち会いはご遠慮いただいております。
                  ワンちゃんが落ち着いた状態でトリミングを受けられるよう、ご理解とご協力をお願いいたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-12 bg-teal-light rounded-lg text-center">
          <h2 className="text-2xl font-medium text-teal-dark mb-6">お問い合わせ</h2>
          <p className="text-teal-dark/80 max-w-2xl mx-auto mb-8">
            ご不明な点やご質問がございましたら、お気軽にお問い合わせください。 スタッフが丁寧にご対応いたします。
          </p>
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}

