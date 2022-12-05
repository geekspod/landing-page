
import { MAPHeader } from '@/components/MAPHeader'
import { Footer } from '@/components/Footer'
import { MAPText2 } from '@/components/MAPText2'
import {MAPSplit} from '@/components/MAPSplit'
import { MAPContact } from '@/components/MAPContact'
import {MAPManagement } from '@/components/MAPManagements'
import { MAPText1 } from '@/components/MAPText1'
import { HeaderWhite } from '@/components/HeadeWhite'
import favicon from "public/favicon.ico"
import Head from 'next/head';

export default function MAP(){
    return (
        <>
        
<Head>
<meta charset="UTF-8" />
      <meta name="keywords" content="recruitment, IT consultant, remote jobs hiring,full time jobs,consultant,careers,consultants,part time remote jobs,IT recruitment,corporation,hiring,job sites,business,business opportunities,candidates,career opportunities,computer engineering,job opportunities,jobs,work from home jobs,find a job,target hiring,geeks,software developer,professionals,full stack engineer,engineering team,engineering,organization,jobs hiring,work from home,remote jobs,team building,part time jobs,employment,job search,software engineer,jobs hiring,career opportunities,jobs near me,jobs hiring near me,part time jobs near me,online jobs,job search," />
<title>GeeksPod - Make a pod</title>
<link rel="shortcut icon" href={favicon.src} />
</Head>
        <HeaderWhite></HeaderWhite>
        <MAPHeader></MAPHeader>
        <MAPText1></MAPText1>
        <MAPManagement></MAPManagement>
        <MAPText2></MAPText2>
        <MAPContact></MAPContact>
        <MAPSplit></MAPSplit>
        <Footer></Footer>
        </>
    )
}
