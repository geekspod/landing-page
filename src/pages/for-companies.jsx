
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
          <meta charset="UTF-8" />
      <meta name="keywords" content="recruitment, IT consultant, remote jobs hiring,full time jobs,consultant,careers,consultants,part time remote jobs,IT recruitment,corporation,hiring,job sites,business,business opportunities,candidates,career opportunities,computer engineering,job opportunities,jobs,work from home jobs,find a job,target hiring,geeks,software developer,professionals,full stack engineer,engineering team,engineering,organization,jobs hiring,work from home,remote jobs,team building,part time jobs,employment,job search,software engineer,jobs hiring,career opportunities,jobs near me,jobs hiring near me,part time jobs near me,online jobs,job search," />
      <meta lang="en" />
<meta name="description" content="GeeksPod - Disrupt The Competition" />  
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
