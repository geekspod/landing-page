
import {HeaderHome} from "@/components/HeaderHome"
import {LogosHome} from "@/components/LogosHome"
import { AboutHome } from '@/components/AboutHome'
import { AboutHome2 } from '@/components/AboutHome2'
import { AboutHome3 } from '@/components/AboutHome3'
import { AboutHome4 } from '@/components/AboutHome4'
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
<meta charset="UTF-8" />
<meta lang="en" />
<meta name="description" content="GeeksPod - Build Your Dream Engineering Team" />
<meta name="keywords" content="recruitment, IT consultant, remote jobs hiring,full time jobs,consultant,careers,consultants,part time remote jobs,IT recruitment,corporation,hiring,job sites,business,business opportunities,candidates,career opportunities,computer engineering,job opportunities,jobs,work from home jobs,find a job,target hiring,geeks,software developer,professionals,full stack engineer,engineering team,engineering,organization,jobs hiring,work from home,remote jobs,team building,part time jobs,employment,job search,software engineer,jobs hiring,career opportunities,jobs near me,jobs hiring near me,part time jobs near me,online jobs,job search," />
<title>GeeksPod - Build Your Dream Engineering Team</title>
<link rel="shortcut icon" href={favicon.src} />
</Head>
  <HeaderBlack></HeaderBlack>
<HeaderHome></HeaderHome>
<LogosHome></LogosHome>
<AboutHome></AboutHome>
<AboutHome3></AboutHome3>
<AboutHome4></AboutHome4>
<AboutHome2></AboutHome2>
<TeamHome></TeamHome>
<FooterHome></FooterHome>
<Footer color='bg-[#000000]'></Footer>
</>

  )
}
