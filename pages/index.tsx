import Head from 'next/head'
import Image from 'next/image'
import TodoCard from '../component/TodoCard'
import TodoListing from '../component/TodoListing'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <TodoCard />
    </div>
  )
}
