import { Badge, Box, Heading, Image, Text, Flex, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import api from '../server/api/$api';
import aspida from '@aspida/node-fetch';
import fetch from 'node-fetch';

export async function getStaticProps() {
  // 記事取得する
  const f = api(aspida(fetch));
  const articles = await f.articles.get();
  return {
    props: {
      firstArticles: articles.body
    },
    revalidate: 60
  }
}

const Home = ({firstArticles}) => {
  const articles = firstArticles.map((article) => {
    return (<Box key={article.id} maxW="320px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="16px">
              <Image src={article.pictureUrl} objectFit="cover" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">New</Badge>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {article.title}
                </Box>
              </Box>
            </Box>)
  });
  return (
    <>
      <Head>
        <title>Match App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section>
          <Box backgroundColor="#fffcff">
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
        <section>
          <Flex wrap="wrap">
            {articles}
          </Flex>
        </section>
        <footer>
          <Box>
            <Text color="#93a5b1" fontSize="0.5rem">Copyright (C) Match Dev All Rights Reserved.</Text>
          </Box>
        </footer>
      </Layout>
    </>
  )
}

export default Home
