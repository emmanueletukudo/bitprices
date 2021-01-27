import Head from 'next/head'
import Price from "./components/Prices";
import styles from '../styles/Home.module.css'
import {getCurrentRate} from "./api/prices";

const  Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bit Prices
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
        <Price prices={props.prices}/>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
Home.getInitialProps = async () => {
  const res = await getCurrentRate();
  let prices = res.prices.data.bpi;
  return prices;
}
export default Home;