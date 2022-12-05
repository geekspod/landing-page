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
      <meta name="keywords" content="recruitment, IT consultant, consultant,careers,career opportunities,jobs,geeks,software developer,engineering,organization,jobs hiring,work from home,remote jobs,team building,part time jobs,employment,job search,software engineer,jobs hiring,career opportunities,jobs near me,jobs hiring near me,part time jobs near me,online jobs,job search," />
      <title>GeeksPod - Let&apos;s Connect</title>
      <link rel="shortcut icon" href={favicon.src} />

      </Head>

    <HeaderWhite></HeaderWhite>
<Contact></Contact>
  <Footer color='bg-[#000000]'></Footer>
  </>
  
    )
  }