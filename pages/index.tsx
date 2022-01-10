import type { NextPage } from 'next'
import Head from 'next/head'
import HeroesList from './HeroesList/HeroesList'
import React, { useContext, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getHeroes } from './api/heroes'
import { observer } from 'mobx-react-lite'
import { AnyHero } from '../types/baseTypes'
import { StoreContext } from '../features/store/store'

type HomePageProps = {
  heroes: AnyHero[]
}

const Home = ({ heroes }: HomePageProps) => {
  
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroesList heroes={heroes} />
      </main>

      { store.selectedCard &&
        <aside />
      }
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      heroes: getHeroes()
    }
  }
}

export default observer(Home)
