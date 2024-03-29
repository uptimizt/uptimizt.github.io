import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Telegram, Github, EnvelopeFill } from 'react-bootstrap-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anatolii Iumashev | web developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.bg}></div>
        <div className={styles.overlay}></div>
        <main className={styles.main}>
          <div className={styles.container}>

            <h1 className={styles.title}>
              Anatolii Iumashev
            </h1>
            <p className={styles.description}>
              web-developer, agile-master
            </p>

            <div className={styles.social}>
              <a href="https://t.me/uptimizt" className={styles.icon}>
                <Telegram size={36} />
              </a>
              <a href="https://github.com/uptimizt" className={styles.icon}>
                <Github size={36} />
              </a>
              <a href="mailto::uptimizt@gmail.com" className={styles.icon}>
                <EnvelopeFill size={36} />
              </a>

            </div>
          </div>

        </main>
      </div>
    </>
  )
}
