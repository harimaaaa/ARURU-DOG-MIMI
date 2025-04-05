import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, AlertTriangle } from "lucide-react"
import ContactButtons from "@/components/contact-buttons"

// SEO向けのメタデータを設定
export const metadata: Metadata = {
  title: "ペットホテル | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
  description:
    "愛知県刈谷市のペットサロン ARURU DOG MIMIのペットホテルサービス。安心して愛犬を預けられる快適な環境をご用意。スタンダード、セミスイート、スイートの3種類のお部屋タイプからお選びいただけます。",
  keywords: "ペットサロン, ペットホテル, ドッグホテル, 愛犬, お預かり, 宿泊, 愛知県, 刈谷市",
  openGraph: {
    title: "ペットホテル | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
    description:
      "愛知県刈谷市のペットサロン ARURU DOG MIMIのペットホテルサービス。安心して愛犬を預けられる快適な環境をご用意。",
    url: "https://www.aruru-dog-mimi.com/hotel",
    images: [
      {
        url: "/images/hotel-og.jpg",
        width: 1200,
        height: 630,
        alt: "ARURU DOG MIMI ペットホテルサービス",
      },
    ],
  },
}

export default function HotelPage() {
  const features = [
    "営業時間内のスタッフによる丁寧なケア",
    "清潔な個室でストレスフリー",
    "定期的な散歩サービス",
    "お預かり中の写真をLINEでお送り",
    "ワンちゃんの状態を定期的にチェック",
    "ホテル期間中のトリミングは10%オフ",
  ]

  const roomTypes = [
    {
      name: "スタンダード",
      size: "95cm×65cm×85cm",
      description: "小型犬であればトイレトレーなどを置いても十分に寝るスペースが確保できる広さがあります。",
      price: "5,500円",
      image: "/images/room-standard.png",
      forDogs: "小型犬向け",
      multipleStay: "1頭でのご宿泊のお部屋となります（同室不可）",
    },
    {
      name: "セミスイート",
      size: "畳1畳分(180cm×90cm)",
      description: "小型犬はもちろん、中型犬も余裕を持って過ごすスペースがあります。",
      price: "7,800円",
      image: "/images/hotel-facility-1.png",
      forDogs: "小型犬・中型犬向け",
      multipleStay: "2頭まで同室可（同室する場合、追加1頭につき+2,200円）",
    },
    {
      name: "スイート",
      size: "畳2畳分(180cm×180cm)",
      description: "大型犬が入りトイレトレーを置いても十分に動けるスペースがあります。",
      price: "10,500円",
      image: "/images/room-suite.png",
      forDogs: "大型犬向け",
      multipleStay: "2頭以上同室可（同室する場合、追加1頭につき+2,200円）",
    },
  ]

  const shortStay = [
    {
      time: "1時間",
      price: "880円",
    },
    {
      time: "3時間以上",
      price: "3,300円",
    },
  ]

  const notes = [
    "トリミングご利用時のお預かりは終了後1時間まで無料でお預かりとさせていただきます。",
    "ホテル期間中のトリミングは10%オフになります。",
    "営業時間外は無人となります。",
    "前払いをお願いしております。",
    "混合ワクチン、狂犬病接種お願いいたします。（持病、アレルギー等何かしらの理由がある場合、ご相談ください。）",
    "生後6か月未満の仔犬、成犬小型中型犬13歳以上・大型犬10歳以上、妊娠中はお預かりできません。",
    "ゴールデンウィーク・お盆・年末年始はご利用料金に+￥500増額致します。",
  ]

  return (
    <div className="bg-white">
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hotel-facility-3.png" alt="ペットホテル" fill className="object-cover" />
        </div>
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 max-w-xl text-center">
          <h1 className="text-3xl font-medium text-teal-dark mb-2">ペットホテル</h1>
          <p className="text-teal-dark/80">安心して愛犬を預けられる快適な環境</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-teal-dark mb-6">ペットホテルサービス</h2>
            <p className="text-teal-dark/80 mb-6 leading-relaxed">
              ARURU DOG MIMIのペットホテルは、飼い主様が安心してワンちゃんを預けられる環境を整えています。
              営業時間内はスタッフがワンちゃん一頭一頭に合わせたケアを行います。
            </p>
            <p className="text-teal-dark/80 mb-8 leading-relaxed">
              旅行や出張、急な用事など、どんな理由でもお気軽にご利用ください。
              ワンちゃんが快適に過ごせるよう、最善の環境をご用意しております。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="bg-teal rounded-full p-1 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-teal-dark/80">{feature}</span>
                </div>
              ))}
            </div>
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
          <div className="flex-1 relative min-h-[400px]">
            <Image src="/images/hotel-service.png" alt="ペットホテル" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* ホテル設備セクション - ペットホテルサービスの下に移動 */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">ホテル設備</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md bg-white">
              <div className="aspect-video relative">
                <Image
                  src="/images/hotel-facility-1.png"
                  alt="清潔な個室"
                  fill
                  className="object-cover rounded-t-lg"
                  style={{ objectPosition: "center 85%" }}
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-xl">清潔な個室</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-teal-dark/80">
                  一頭一頭に専用の個室をご用意。清潔で快適な空間でリラックスして過ごせます。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <div className="aspect-video relative">
                <Image
                  src="/images/hotel-facility-2.png"
                  alt="プレイエリア"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-xl">プレイエリア</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-teal-dark/80">
                  広々としたプレイエリアで、適度な運動と遊びの時間を確保します。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <div className="aspect-video relative">
                <Image
                  src="/images/hotel-facility-3.png"
                  alt="スタッフケア"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-dark text-xl">スタッフによるケア</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-teal-dark/80">
                  営業時間内はスタッフがワンちゃんの健康状態を定期的にチェックし、快適に過ごせるようサポートします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* お部屋タイプと料金表を統合したセクション */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">お部屋タイプと料金</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <Card key={room.name} className="border-none shadow-md bg-white overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover"
                    style={room.name === "セミスイート" ? { objectPosition: "center 85%" } : {}}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <CardTitle className="text-teal-dark text-xl">{room.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="bg-teal-light/50 px-3 py-1 rounded-full inline-block text-sm text-teal-dark mb-2">
                      {room.forDogs}
                    </div>
                    <div className="text-sm font-medium text-teal-dark">お部屋の広さ: {room.size}</div>
                    <p className="text-sm text-teal-dark/80 mt-2">{room.description}</p>
                    <p className="text-xs text-teal-dark/70 mt-2 italic">{room.multipleStay}</p>
                  </div>
                  <div className="bg-teal-light/30 p-3 rounded-lg text-center">
                    <p className="text-sm text-teal-dark/80">料金</p>
                    <p className="text-xl font-medium text-teal-dark">1泊 {room.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 mb-4">
            <p className="text-teal-dark/80">多頭飼いのお客様で一緒のお部屋をご希望の方こちらでお願いします。</p>
          </div>

          {/* ショートステイ料金表 */}
          <div className="text-center mt-12 mb-8">
            <h3 className="text-xl font-medium text-teal-dark mb-2">ショートステイ 料金表</h3>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse max-w-lg mx-auto">
              <thead>
                <tr className="bg-teal-light">
                  <th className="border border-teal/20 p-3 text-teal-dark">時間</th>
                  <th className="border border-teal/20 p-3 text-teal-dark">1時間</th>
                  <th className="border border-teal/20 p-3 text-teal-dark">3時間以上</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-teal/20 p-3 bg-teal-light/50 font-medium text-teal-dark">料金</td>
                  <td className="border border-teal/20 p-3 text-center">¥880</td>
                  <td className="border border-teal/20 p-3 text-center">¥3,300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-teal-light/30 p-4 rounded-lg text-center mb-8">
            <p className="text-teal-dark">
              トリミングご利用時のお預かりは終了後1時間まで無料でお預かりとさせていただきます。
            </p>
          </div>
        </div>

        {/* 注意事項セクション */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">ご利用にあたっての注意事項</h2>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-red-700 text-sm">
                持病等で動物病院から処方されたお薬を飲んでいる場合、愛玩動物看護士法により、
                国家資格を持っていない無資格者による投薬は一切禁止されているため、お預かりすることができません。
                飼い主様がご自身等に渡せてきた場合も投薬行為になりますので、お預かりすることができません。
                ご了承ください。
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-teal rounded-full p-1 flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-teal-dark/80">{note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center text-teal-dark/80">
            <p>日程につきましては、スタッフまでお尋ねください。</p>
          </div>
        </div>

        <div className="py-12 bg-teal-light rounded-lg text-center">
          <h2 className="text-2xl font-medium text-teal-dark mb-6">ご予約・お問い合わせ</h2>
          <p className="text-teal-dark/80 max-w-2xl mx-auto mb-8">
            ペットホテルのご予約はお電話または公式LINEから承っております。 お気軽にお問い合わせください。
          </p>
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}

