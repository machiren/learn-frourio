import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Heading, useToast } from "@chakra-ui/react"
import Layout from '../../components/Layout';

export async function getStaticProps() {
  // ビルド時刻の取得
  const date = new Date();
  const build_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return {
    props: {
      name: 'Ren Machida',
      build_time
    },
    revalidate: 60
  }
}

export default function Profile({name, build_time}){
  const toast = useToast();

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <Heading>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Heading>
      <Heading>
        <Link href="/ssg">
          <a>Link SSG TEST</a>
        </Link>
      </Heading>
      <Heading as="h1">
        <Link href="/ssr">
          <a>Link SSR TEST</a>
        </Link>
      </Heading>
      <p>私は {name} です</p>
      <p>ビルドした日時は {build_time} です</p>
      <Button
        onClick={() =>
          toast({
            title: "チャクラUIお試しです",
            description: "learn chakra ui framework",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        }
      >
        トースト！
      </Button>
    </Layout>
  )
}