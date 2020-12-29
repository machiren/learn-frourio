import { Box, FormControl, FormLabel, Input, Button, Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../../components/layout';

export default function Admin() {
  const [isLoading, setLoading] = useState(false);
  const loginButtonText = Object.freeze({
    name: 'ログイン',
    isLoading: '認証中...',
    color: 'blue',
    clickEvent: () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  })
  return (
    <>
      <Layout>
        <Center marginTop="64px">
          <Heading as="h1">ポートフォリオ管理画面</Heading>
        </Center>
        <Box marginTop="64px" bg="white" w="100%" p={4} color="black" borderWidth="1px" borderRadius="lg">
          <FormControl id="first-name" isRequired>
            <FormLabel>ユーザーネーム</FormLabel>
            <Input placeholder="UserName" />
          </FormControl>
          <FormControl id="first-name" isRequired marginY="16px">
            <FormLabel>パスワード</FormLabel>
            <Input placeholder="Password" />
          </FormControl>
          <Center marginTop="24px">
            <Button isLoading={isLoading} loadingText={loginButtonText.isLoading} colorScheme={loginButtonText.color} onClick={loginButtonText.clickEvent}>{loginButtonText.name}</Button>
          </Center>
        </Box>
      </Layout>
    </>
  )
}