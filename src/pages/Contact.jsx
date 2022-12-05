import { Contact } from "@/components/Contact"
import { HeaderWhite } from "@/components/HeadeWhite"
import { Footer } from "@/components/Footer"
import Head from 'next/head';
import favicon from 'public/favicon.ico'

export default function Home() {
    return (
      <>
      <Head>
      <meta charset="UTF-8" />
      <meta name="keywords" content="recruitment, IT consultant, remote jobs hiring,full time jobs,consultant,careers,consultants,part time remote jobs,IT recruitment,corporation,hiring,job sites,business,business opportunities,candidates,career opportunities,computer engineering,job opportunities,jobs,work from home jobs,find a job,target hiring,geeks,software developer,professionals,full stack engineer,engineering team,engineering,organization,jobs hiring,work from home,remote jobs,team building,part time jobs,employment,job search,software engineer,jobs hiring,career opportunities,jobs near me,jobs hiring near me,part time jobs near me,online jobs,job search," />
      <meta lang="en" />
<meta name="description" content="GeeksPod - Lets Connect" />  
      <title>GeeksPod - Let&apos;s Connect</title>
      <link rel="shortcut icon" href={favicon.src} />

      </Head>

    <HeaderWhite></HeaderWhite>
<Contact></Contact>
  <Footer color='bg-[#000000]'></Footer>
  </>
  
    )
  }