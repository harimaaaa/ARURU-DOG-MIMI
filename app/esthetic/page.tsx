import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ContactButtons from "@/components/contact-buttons"

// SEO向けのメタデータを設定
export const metadata: Metadata = {
  title: "エステ | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
  description:
    "愛知県刈谷市のペットサロン ARURU DOG MIMIのエステサービス。ワンちゃんの肌と被毛を健やかに保つ特別なケアメニューをご用意。Birthdayコース、パック、歯磨きなど充実したメニュー。",
  keywords:
    "ペットサロン, ドッグエステ, Birthdayコース, パック, 歯磨き, もふもふクリーニング, 被毛ケア, 愛知県, 刈谷市",
  openGraph: {
    title: "エステ | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
    description:
      "愛知県刈谷市のペットサロン ARURU DOG MIMIのエステサービス。ワンちゃんの肌と被毛を健やかに保つ特別なケアメニューをご用意。",
    url: "https://www.aruru-dog-mimi.com/esthetic",
    images: [
      {
        url: "/images/esthetic-og.jpg",
        width: 1200,
        height: 630,
        alt: "ARURU DOG MIMI エステサービス",
      },
    ],
  },
}

export default function EstheticPage() {
  const estheticServices = [
    {
      title: "Birthdayコース",
      description:
        "ワンちゃんの特別な日に。スキンケアとトリートメントの2種類からお選びいただけます。スキンケアは肌の炎症を抑え健やかな状態に、トリートメントは被毛を内側から補修し艶と柔らかさを取り戻します。",
      image: "/placeholder.svg?height=300&width=400&text=Birthdayコース",
    },
    {
      title: "スキンケアコース",
      description: "肌トラブルを抱えるワンちゃんのための特別なケアコースです。肌の炎症を抑え、健やかな状態に導きます。",
      image: "/placeholder.svg?height=300&width=400&text=スキンケアコース",
    },
    {
      title: "トリートメントコース",
      description: "ダメージを受けた被毛を内側から補修し、健康的な艶と柔らかさを取り戻します。",
      image: "/placeholder.svg?height=300&width=400&text=トリートメントコース",
    },
    {
      title: "もふもふクリーニングコース",
      description: "季節の変わり目に最適な、被毛の生え変わりをサポートするコースです。抜け毛の多い時期におすすめです。",
      image: "/placeholder.svg?height=300&width=400&text=もふもふクリーニングコース",
    },
    {
      title: "パック（三種類）",
      description:
        "ワンちゃんの肌質や被毛の状態に合わせて選べる3種類のパックをご用意。特殊な成分で被毛を包み込み、汚れを浮かせて落とし、艶と柔らかさを取り戻します。",
      image: "/images/pack-treatment.png",
    },
    {
      title: "歯磨き",
      description:
        "ワンちゃんの歯の健康を守るための専門的なケアです。歯垢の除去や口臭予防に効果的です。定期的なケアで歯周病予防にもつながります。",
      image: "/placeholder.svg?height=300&width=400&text=歯磨き",
    },
  ]

  return (
    <div className="bg-white">
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1200&text=エステ" alt="エステ" fill className="object-cover" />
        </div>
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 max-w-xl text-center">
          <h1 className="text-3xl font-medium text-teal-dark mb-2">エステ</h1>
          <p className="text-teal-dark/80">ワンちゃんの肌と被毛を健やかに保つ特別なケア</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-teal-dark mb-6">エステサービス</h2>
            <p className="text-teal-dark/80 mb-6 leading-relaxed">
              ARURU DOG MIMIでは、ワンちゃんの肌と被毛を健やかに保つための特別なエステメニューをご用意しています。
              それぞれのワンちゃんの状態に合わせたケアで、健康的な美しさを引き出します。
            </p>
            <p className="text-teal-dark/80 mb-8 leading-relaxed">
              トリミングと組み合わせることで、より効果的なケアが可能です。 お気軽にスタッフにご相談ください。
            </p>
            {/* ボタンのスタイルを変更 */}
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
            <Image src="/images/esthetic-service.png" alt="エステサービス" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* 残りのコンテンツは変更なし */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">エステメニュー</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estheticServices.map((service) => (
              <Card key={service.title} className="border-none shadow-md bg-white">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-teal-dark text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-teal-dark/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">エステ料金表</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-teal-light">
                <TableRow>
                  <TableHead className="text-teal-dark">メニュー</TableHead>
                  <TableHead className="text-right text-teal-dark">～10kg</TableHead>
                  <TableHead className="text-right text-teal-dark">10kg～16kg</TableHead>
                  <TableHead className="text-right text-teal-dark">16kg～</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Birthdayコース（スキンケア）</TableCell>
                  <TableCell className="text-right">¥2,500</TableCell>
                  <TableCell className="text-right">¥3,700</TableCell>
                  <TableCell className="text-right">¥5,700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Birthdayコース（トリートメント）</TableCell>
                  <TableCell className="text-right">¥2,500</TableCell>
                  <TableCell className="text-right">¥3,200</TableCell>
                  <TableCell className="text-right">¥4,400</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">パック（三種類）</TableCell>
                  <TableCell className="text-right">¥2,500</TableCell>
                  <TableCell className="text-right">¥3,300</TableCell>
                  <TableCell className="text-right">¥5,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">もふもふクリーニングコース</TableCell>
                  <TableCell className="text-right">¥2,000</TableCell>
                  <TableCell className="text-right">¥4,000</TableCell>
                  <TableCell className="text-right">¥6,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">スキンケアコース</TableCell>
                  <TableCell className="text-right">¥1,800</TableCell>
                  <TableCell className="text-right">¥3,000</TableCell>
                  <TableCell className="text-right">¥5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">トリートメントコース</TableCell>
                  <TableCell className="text-right">¥1,800</TableCell>
                  <TableCell className="text-right">¥2,500</TableCell>
                  <TableCell className="text-right">¥3,300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">レイキング</TableCell>
                  <TableCell className="text-right">¥1,500</TableCell>
                  <TableCell className="text-right">¥3,300</TableCell>
                  <TableCell className="text-right">¥5,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">歯磨き</TableCell>
                  <TableCell className="text-right">¥550</TableCell>
                  <TableCell className="text-right">¥660</TableCell>
                  <TableCell className="text-right">¥770</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">肉球ケア</TableCell>
                  <TableCell className="text-right">¥550</TableCell>
                  <TableCell className="text-right">¥660</TableCell>
                  <TableCell className="text-right">¥770</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">クレンジング</TableCell>
                  <TableCell className="text-right">¥550</TableCell>
                  <TableCell className="text-right">¥660</TableCell>
                  <TableCell className="text-right">¥770</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">肌保湿ケア</TableCell>
                  <TableCell className="text-right">¥550</TableCell>
                  <TableCell className="text-right">¥660</TableCell>
                  <TableCell className="text-right">¥770</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="py-12 bg-teal-light rounded-lg text-center">
          <h2 className="text-2xl font-medium text-teal-dark mb-6">ご予約・お問い合わせ</h2>
          <p className="text-teal-dark/80 max-w-2xl mx-auto mb-8">
            エステのご予約はお電話または公式LINEから承っております。 お気軽にお問い合わせください。
          </p>
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}

