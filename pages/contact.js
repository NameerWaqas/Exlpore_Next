import Link from 'next/link';
import Head from 'next/head';
import Map from '../components/contact/map'


export default function Contact(props){
    return(
        <>
        <Head>
            <title>Contact</title>
        </Head>
        <Map />
        <h1>
            Contact page
        </h1>
        <h3>
            <Link href="/">Back to home</Link>
        </h3>
        </>
    )
    }