import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md bg-white">
      <div className="aspect-video relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-teal-dark text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-teal-dark/80">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="bg-teal-light/50 p-4 rounded-lg w-full text-center">
          <Button asChild variant="teal-accent" className="transform hover:scale-105 transition-transform duration-200">
            <Link href={href}>詳細を見る</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

