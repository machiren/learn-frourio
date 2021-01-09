import Head from 'next/head';
import styles from '~/styles/Home.module.css';
import Layout from '../components/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
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
              Matchは何かを始める際に必要な知識を投稿し合うコミュニティです
            </Text>
            <Text>
              自分の知見を残して誰かのチャレンジを応援しましょう
            </Text>
          </Box>
        </Box>
      </section>
      <footer className={styles.footer}>
        <Box>
          <Text color="#93a5b1" fontSize="0.5rem">Copyright (C) Match Dev All Rights Reserved.</Text>
        </Box>
      </footer>
    </Layout>
    </>
  )
}

export default Home
