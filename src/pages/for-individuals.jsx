import {GeeksHeader} from '@/components/GeeksHeader'
import { GeeksCTA } from '@/components/GeeksCTA'
import { Footer } from '@/components/Footer'
import { HeaderWhite } from '@/components/HeadeWhite'
import { GeeksFooter } from '@/components/GeeksFooter'
import favicon from "public/favicon.ico"
import Head from 'next/head';

export default function Geeks(){
    return (
        <>
        
          <Head>
          <title>GeeksPod - Onboarding Brilliance</title>
      <link rel="shortcut icon" href={favicon.src} />

      </Head>
        <HeaderWhite></HeaderWhite>
        <GeeksHeader>
        </GeeksHeader>
        <GeeksCTA></GeeksCTA>
        <GeeksFooter></GeeksFooter>
        <Footer color='bg-white'></Footer>
        </>
    )
}
