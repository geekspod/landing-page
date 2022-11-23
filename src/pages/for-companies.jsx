
import {WGSHeader} from '@/components/WGSHeader'
import { Footer } from '@/components/Footer'
import { WGS_logo } from '@/components/WGS-logo'
import { HeaderWhite } from '@/components/HeadeWhite'
import { WGSFooter } from '@/components/WGSFooter'
import favicon from "public/favicon.ico"
import Head from 'next/head';

export default function Why_Geekspod() {
  return (
    <>
    
          <Head>
          <title>GeeksPod - Disrupt The Competition</title>
      <link rel="shortcut icon" href={favicon.src} />

      </Head>
    <HeaderWhite></HeaderWhite>
    <WGSHeader></WGSHeader>
    <WGS_logo></WGS_logo>
    <WGSFooter></WGSFooter>
    <Footer color='bg-white'></Footer>

    </>
  )

}
