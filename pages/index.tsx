import { GetStaticProps } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import styles from '../styles/utils.module.css'
// import SampleEchart from './echarts/sample'
import { getSortedPostsData } from '../lib/posts'

const Home = ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <Layout home={true}>
      <div className='homepage'>
        {/* <div className='app-sidebar'></div> */}
        {/* <h1>No Happy</h1> */}
        {/* <SampleEchart /> */}

        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{index + 1}. {title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
