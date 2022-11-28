
import {HeaderHome} from "@/components/HeaderHome"
import {LogosHome} from "@/components/LogosHome"
import { AboutHome } from '@/components/AboutHome'
import { AboutHome2 } from '@/components/AboutHome2'
import { TeamHome } from '@/components/TeamHome'
import { FooterHome } from '@/components/FooterHome'
import { Footer } from '@/components/Footer'
import { HeaderBlack } from '@/components/HeaderBlack'
import favicon from "public/favicon.ico"
import Head from 'next/head';

export default function Home() {
  return (
    <>

<Head>
<title>GeeksPod - Build Your Dream Engineering Team</title>
<link rel="shortcut icon" href={favicon.src} />
</Head>
  <HeaderBlack></HeaderBlack>
<HeaderHome></HeaderHome>
<LogosHome></LogosHome>
<AboutHome></AboutHome>
<AboutHome2></AboutHome2>
<TeamHome></TeamHome>
<FooterHome></FooterHome>
<Footer color='bg-[#000000]'></Footer>
</>

  )
}
