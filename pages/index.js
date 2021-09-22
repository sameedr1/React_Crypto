import Head from "next/head";
import CoinGecko from "coingecko-api";
import styles from "../styles/Home.module.css";
import 'next-pagination/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";


export default function Home() {
  {
    return (
      <div className={styles.container}>
        <Head>
          <title>Crypto Dashboard</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Crypto Dashboard</h1>

          <p className={styles.description}></p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/coinsList">
                <a>Coins list by value</a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/coinsDetails">
                <a>Detailed overview of coins</a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="https://github.com/sameedr1/React_Crypto">
                <a>Github</a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
