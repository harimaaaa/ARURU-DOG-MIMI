import Link from "next/link"
import { Phone, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-medium">
              ARURU DOG MIMI
            </Link>
            <p className="text-sm text-cream/80 mt-2">〒448-0007 愛知県刈谷市一ツ木町4ー7ー11</p>
            <p className="text-sm text-cream/80">TEL: 0566-70-7397</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <Link
                href="tel:0566707397"
                className="flex items-center gap-1 text-sm hover:text-cream/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>お電話 0566-70-7397</span>
              </Link>
              <Link
                href="https://lin.ee/bLA1eDC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-cream/80 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <span>LINE</span>
              </Link>
              <Link
                href="https://www.instagram.com/aruru_dog_mimi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-cream/80 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </Link>
            </div>
            <div className="flex gap-4 mt-2">
              <Link href="/trimming" className="text-xs text-cream/80 hover:text-cream transition-colors">
                トリミング
              </Link>
              <Link href="/esthetic" className="text-xs text-cream/80 hover:text-cream transition-colors">
                エステ
              </Link>
              <Link href="/hotel" className="text-xs text-cream/80 hover:text-cream transition-colors">
                ペットホテル
              </Link>
              <Link href="/access" className="text-xs text-cream/80 hover:text-cream transition-colors">
                アクセス・ご予約
              </Link>
            </div>
            <p className="text-xs text-cream/60 mt-4">
              © {new Date().getFullYear()} ARURU DOG MIMI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

