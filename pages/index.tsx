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
        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{index + 1}. {title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="content"></div>
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
