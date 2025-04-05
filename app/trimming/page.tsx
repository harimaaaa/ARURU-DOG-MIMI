import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactButtons from "@/components/contact-buttons"

// SEO向けのメタデータを設定
export const metadata: Metadata = {
  title: "トリミング | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
  description:
    "愛知県刈谷市のペットサロン ARURU DOG MIMIのトリミングサービス。愛犬の健康と美しさを保つプロフェッショナルなケアを提供します。シャンプー、カット、爪切り、耳ケアなど充実したメニュー。",
  keywords: "ペットサロン, トリミング, ドッグサロン, シャンプー, カット, 爪切り, 耳ケア, 愛知県, 刈谷市",
  openGraph: {
    title: "トリミング | ARURU DOG MIMI | 愛知県刈谷市のペットサロン",
    description:
      "愛知県刈谷市のペットサロン ARURU DOG MIMIのトリミングサービス。愛犬の健康と美しさを保つプロフェッショナルなケアを提供します。",
    url: "https://www.aruru-dog-mimi.com/trimming",
    images: [
      {
        url: "/images/trimming-og.jpg",
        width: 1200,
        height: 630,
        alt: "ARURU DOG MIMI トリミングサービス",
      },
    ],
  },
}

export default function TrimmingPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/trimming-hero-new.jpeg" alt="トリミング" fill className="object-cover" />
        </div>
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 max-w-xl text-center">
          <h1 className="text-3xl font-medium text-teal-dark mb-2">トリミング</h1>
          <p className="text-teal-dark/80">愛犬の健康と美しさを保つプロフェッショナルなケア</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-teal-dark mb-6">トリミングサービス</h2>
            <p className="text-teal-dark/80 mb-6 leading-relaxed">
              ARURU DOG MIMIでは、愛犬の健康と美しさを保つプロフェッショナルなトリミングサービスを提供しています。
              熟練したトリマーが、一頭一頭に合わせた丁寧なケアを行います。
            </p>
            <p className="text-teal-dark/80 mb-6 leading-relaxed">
              シャンプーコース、シャンプーカットコースには、爪切り・足裏バリカン・耳ケア・肛門腺絞り・足周りカットのケアが含まれております。
            </p>

            {/* ご注意事項と追加料金のセクションをよりコンパクトに */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-teal-light p-4 rounded-lg">
                <h3 className="font-medium text-teal-dark text-sm mb-2">ご注意事項</h3>
                <ul className="list-disc list-inside space-y-1 text-teal-dark/80 text-xs">
                  <li>クイックシャンプーの二回連続でのご利用はできません。</li>
                  <li>初回ご利用時、混合ワクチン・狂犬病接種証明書のご持参をお願い致します。</li>
                  <li>二回目以降ご利用時にも、混合ワクチン・狂犬病接種の更新がありましたら、ご持参お願い致します。</li>
                </ul>
              </div>
              <div className="bg-teal-light p-4 rounded-lg">
                <h3 className="font-medium text-teal-dark text-sm mb-2">追加料金が発生する場合</h3>
                <ul className="list-disc list-inside space-y-1 text-teal-dark/80 text-xs">
                  <li>毛玉、もつれ等がある</li>
                  <li>犬種ごとの平均体重よりサイズが大きい</li>
                  <li>デザインカット（おパンツ、ハートなど）</li>
                  <li>老犬、噛み癖がある、暴れてしまう等二人体制でトリミングさせていただく場合</li>
                  <li>オールシザーでのカット</li>
                </ul>
              </div>
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
            <Image
              src="/images/trimming-service.png"
              alt="トリミングサービス"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-medium text-teal-dark mb-8 text-center">トリミング料金表</h2>

          <Tabs defaultValue="a-sa" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-teal-light">
              <TabsTrigger value="a-sa" className="data-[state=active]:bg-teal data-[state=active]:text-white">
                あ～さ行
              </TabsTrigger>
              <TabsTrigger value="ta-ha" className="data-[state=active]:bg-teal data-[state=active]:text-white">
                た～は行
              </TabsTrigger>
              <TabsTrigger value="ma-wa" className="data-[state=active]:bg-teal data-[state=active]:text-white">
                ま～わ行
              </TabsTrigger>
            </TabsList>

            <TabsContent value="a-sa">
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>あ～さ行の犬種トリミング料金（税込）</TableCaption>
                  <TableHeader className="bg-teal-light">
                    <TableRow>
                      <TableHead className="text-teal-dark">犬種</TableHead>
                      <TableHead className="text-right text-teal-dark">クイックシャンプー</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーコース</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーカットコース</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">アメリカンコッカー</TableCell>
                      <TableCell className="text-right">¥5,500</TableCell>
                      <TableCell className="text-right">¥7,000</TableCell>
                      <TableCell className="text-right">¥9,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">イタリアングレイハウンド</TableCell>
                      <TableCell className="text-right">¥2,200</TableCell>
                      <TableCell className="text-right">¥3,800</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ウェスティ</TableCell>
                      <TableCell className="text-right">¥4,000</TableCell>
                      <TableCell className="text-right">¥6,300</TableCell>
                      <TableCell className="text-right">¥8,300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">キャバリア</TableCell>
                      <TableCell className="text-right">¥3,300</TableCell>
                      <TableCell className="text-right">¥6,000</TableCell>
                      <TableCell className="text-right">¥7,600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">コーギー</TableCell>
                      <TableCell className="text-right">¥4,400</TableCell>
                      <TableCell className="text-right">¥6,200</TableCell>
                      <TableCell className="text-right">¥7,800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ゴールデン・レトリバー</TableCell>
                      <TableCell className="text-right">¥7,500</TableCell>
                      <TableCell className="text-right">¥9,000</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">シーズー</TableCell>
                      <TableCell className="text-right">¥3,100</TableCell>
                      <TableCell className="text-right">¥5,800</TableCell>
                      <TableCell className="text-right">¥7,800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">シェルティ</TableCell>
                      <TableCell className="text-right">¥4,600</TableCell>
                      <TableCell className="text-right">¥6,600</TableCell>
                      <TableCell className="text-right">¥9,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">柴犬</TableCell>
                      <TableCell className="text-right">¥4,400</TableCell>
                      <TableCell className="text-right">¥6,200</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ジャックラッセルテリア</TableCell>
                      <TableCell className="text-right">¥3,000</TableCell>
                      <TableCell className="text-right">¥5,000</TableCell>
                      <TableCell className="text-right">¥6,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">スコティッシュテリア</TableCell>
                      <TableCell className="text-right">¥3,700</TableCell>
                      <TableCell className="text-right">¥6,100</TableCell>
                      <TableCell className="text-right">¥8,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">スタンダードプードル</TableCell>
                      <TableCell className="text-right">¥11,500</TableCell>
                      <TableCell className="text-right">¥12,500</TableCell>
                      <TableCell className="text-right">¥18,500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="ta-ha">
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>た～は行の犬種トリミング料金（税込）</TableCaption>
                  <TableHeader className="bg-teal-light">
                    <TableRow>
                      <TableHead className="text-teal-dark">犬種</TableHead>
                      <TableHead className="text-right text-teal-dark">クイックシャンプー</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーコース</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーカットコース</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">チワワ (スムース)</TableCell>
                      <TableCell className="text-right">¥2,200</TableCell>
                      <TableCell className="text-right">¥3,800</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">チワワ (ロング)</TableCell>
                      <TableCell className="text-right">¥2,400</TableCell>
                      <TableCell className="text-right">¥4,400</TableCell>
                      <TableCell className="text-right">¥6,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">トイプードル</TableCell>
                      <TableCell className="text-right">¥3,400</TableCell>
                      <TableCell className="text-right">¥6,300</TableCell>
                      <TableCell className="text-right">¥8,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">パグ</TableCell>
                      <TableCell className="text-right">¥3,000</TableCell>
                      <TableCell className="text-right">¥5,000</TableCell>
                      <TableCell className="text-right">¥6,400</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">パピヨン</TableCell>
                      <TableCell className="text-right">¥3,000</TableCell>
                      <TableCell className="text-right">¥5,200</TableCell>
                      <TableCell className="text-right">¥6,800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ビーグル</TableCell>
                      <TableCell className="text-right">¥3,100</TableCell>
                      <TableCell className="text-right">¥6,000</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ビションフリーゼ</TableCell>
                      <TableCell className="text-right">¥3,600</TableCell>
                      <TableCell className="text-right">¥6,500</TableCell>
                      <TableCell className="text-right">¥8,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">フレンチブルドッグ</TableCell>
                      <TableCell className="text-right">¥3,000</TableCell>
                      <TableCell className="text-right">¥5,000</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ペキニーズ</TableCell>
                      <TableCell className="text-right">¥3,100</TableCell>
                      <TableCell className="text-right">¥5,500</TableCell>
                      <TableCell className="text-right">¥7,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ボストンテリア</TableCell>
                      <TableCell className="text-right">¥3,000</TableCell>
                      <TableCell className="text-right">¥5,000</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ポメラニアン</TableCell>
                      <TableCell className="text-right">¥3,200</TableCell>
                      <TableCell className="text-right">¥5,400</TableCell>
                      <TableCell className="text-right">¥7,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="ma-wa">
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>ま～わ行の犬種トリミング料金（税込）</TableCaption>
                  <TableHeader className="bg-teal-light">
                    <TableRow>
                      <TableHead className="text-teal-dark">犬種</TableHead>
                      <TableHead className="text-right text-teal-dark">クイックシャンプー</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーコース</TableHead>
                      <TableHead className="text-right text-teal-dark">シャンプーカットコース</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">マルチーズ</TableCell>
                      <TableCell className="text-right">¥2,900</TableCell>
                      <TableCell className="text-right">¥5,100</TableCell>
                      <TableCell className="text-right">¥7,400</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ミニチュアシュナウザー</TableCell>
                      <TableCell className="text-right">¥3,200</TableCell>
                      <TableCell className="text-right">¥6,100</TableCell>
                      <TableCell className="text-right">¥8,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ミニチュアダックスフンド(スムース)</TableCell>
                      <TableCell className="text-right">¥2,200</TableCell>
                      <TableCell className="text-right">¥3,800</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ミニチュアダックスフンド(ロング)</TableCell>
                      <TableCell className="text-right">¥2,700</TableCell>
                      <TableCell className="text-right">¥4,800</TableCell>
                      <TableCell className="text-right">¥6,300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ミニチュアピンシャー</TableCell>
                      <TableCell className="text-right">¥2,200</TableCell>
                      <TableCell className="text-right">¥3,800</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ヨークシャテリア</TableCell>
                      <TableCell className="text-right">¥2,800</TableCell>
                      <TableCell className="text-right">¥5,000</TableCell>
                      <TableCell className="text-right">¥7,300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ラブラドール・レトリバー</TableCell>
                      <TableCell className="text-right">¥6,500</TableCell>
                      <TableCell className="text-right">¥8,000</TableCell>
                      <TableCell className="text-right">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ワイヤーフォックステリア</TableCell>
                      <TableCell className="text-right">¥3,700</TableCell>
                      <TableCell className="text-right">¥6,100</TableCell>
                      <TableCell className="text-right">¥8,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">その他犬種(Mix犬・記載がない犬種)</TableCell>
                      <TableCell className="text-right">要相談</TableCell>
                      <TableCell className="text-right">要相談</TableCell>
                      <TableCell className="text-right">要相談</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="py-12 bg-teal-light rounded-lg text-center">
          <h2 className="text-2xl font-medium text-teal-dark mb-6">ご予約・お問い合わせ</h2>
          <p className="text-teal-dark/80 max-w-2xl mx-auto mb-8">
            トリミングのご予約はお電話または公式LINEから承っております。 お気軽にお問い合わせください。
          </p>
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}

