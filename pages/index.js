import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/index.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>
          Home page
        </h1>
        <h2><Link href="/about">Navigate to: About</Link></h2>
        <h2><Link href="/contact">Navigate to: Contact</Link></h2>
        {/* <h2><Link/>Navigate to: Auth</Link></h2> */}
      </main>
    </div>
  )
}