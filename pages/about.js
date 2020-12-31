import Link from 'next/link';
import Head from 'next/head';



export default function About(props) {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <h1>
                About page
            </h1>
            <h3>
                <Link href="/">Back to home</Link>
            </h3>
        </>
    )
}