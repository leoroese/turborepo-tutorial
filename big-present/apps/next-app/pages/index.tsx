import React from 'react'
import Head from 'next/head'
import { Button } from '@ui/Button'

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Button />
      <div className="bg-yellow-500 h-16 w-16" />
    </main>
  </div>
)

export default Home
