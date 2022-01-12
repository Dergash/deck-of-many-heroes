import type { NextPage } from 'next'
import Head from 'next/head'
import HeroesList from './HeroesList/HeroesList'
import React, { useContext, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { getHeroes } from './api/heroes'
import { observer } from 'mobx-react-lite'
import { AnyHero } from '../types/baseTypes'
import { StoreContext } from '../features/store/store'
import { isBgHero } from '../features/bg'
import { BGDetails } from '../features/bg/BGDetails'
import { isNwnHero } from '../features/nwn'
import { NeverwinterDetails } from '../features/nwn/NeverwinterDetails'
import { isArcanumHero } from '../features/arcanum'
import { ArcanumDetails } from '../features/arcanum/ArcanumDetails'
import { DetailsCard } from '../features/ui/DetailsCard'
import { action, runInAction } from 'mobx'

type HomePageProps = {
  heroes: AnyHero[]
}

const Home = ({ heroes }: HomePageProps) => {
  
  const store = useContext(StoreContext)
  const hero = heroes?.find(item => item.id === store.selectedCard)

  useEffect(() => {
    runInAction(() => {
      store.selectedCard = heroes[0]?.id
    })
  }, [heroes])

  return (
    <div className={styles.container}>
      <Head>
        <title>Deck of Many Heroes</title>
        <meta name="description" content="Don't venture into Baldur's Gate, Neverwinter Nights and Arcanum unprepared, check your party members!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroesList heroes={heroes} />
      </main>
      <aside className={styles.details}>
        { hero && <>
            {isBgHero(hero) && <BGDetails hero={hero} />}
            {isNwnHero(hero) && <NeverwinterDetails hero={hero} />}
            {isArcanumHero(hero) && <ArcanumDetails hero={hero} />}
          </>
        }
        { !hero && <DetailsCard name='' />}
      </aside>
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
