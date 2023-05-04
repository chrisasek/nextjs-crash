import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default async function Home() {

  return (
    <main className={styles.main}>
      <div className="text-center">
        <h1>Welcome to Todays News</h1>
        <p className="mb-5">We bring global news to you</p>

        <Link href="/news" className='btn btn-lg btn-secondary'>Get Started</Link>
      </div>
    </main>
  )
}
