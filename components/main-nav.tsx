import Link from "next/link"
import Image from 'next/image'

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="items-left order-2 md:order-1">
      <Link href="/" className="flex space-x-2 font-extrabold">
        <Image
          src="/log.png"
          alt="ORIGINTIME"
          width={20}
          height={20}
        >

        </Image>
      </Link>
    </div>
  )
}
