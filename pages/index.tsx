import Head from 'next/head';
import { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import useAspidaSWR from '@aspida/swr';
import styles from '~/styles/Home.module.css';
import { apiClient } from '~/utils/apiClient';
import { Task } from '$prisma/client';
import Layout from '../components/Layout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      revalidate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    revalidate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    revalidate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>

  return (
    <>
    <Head>
      <title>Match App</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Layout>
      <section>
        <Box backgroundColor="#fffcff" h={[80, 160, 320, 480]}>
          <Box maxW="50%">
          </Box>
          <Box maxW="50%">
            <Heading as="h2">
              Exchange skills
            </Heading>
            <Text>
              Matchはスキルや趣味のマッチングサービスで自分の長所を相手と交換しましょう
            </Text>
          </Box>
        </Box>
      </section>
      <footer className={styles.footer}>
        <Box h={[80, 160, 320, 400]}>
          <Text color="#93a5b1" fontSize="0.5rem">Copyright (C) Match Dev All Rights Reserved.</Text>
        </Box>
      </footer>
    </Layout>
    </>
  )
}

export default Home
