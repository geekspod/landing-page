
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
