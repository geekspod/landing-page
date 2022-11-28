import { Contact } from "@/components/Contact"
import { HeaderWhite } from "@/components/HeadeWhite"
import { Footer } from "@/components/Footer"
import Head from 'next/head';
import favicon from 'public/favicon.ico'

export default function Home() {
    return (
      <>
      <Head>
      <title>GeeksPod - Let&apos;s Connect</title>
      <link rel="shortcut icon" href={favicon.src} />

      </Head>

    <HeaderWhite></HeaderWhite>
<Contact></Contact>
  <Footer color='bg-[#000000]'></Footer>
  </>
  
    )
  }