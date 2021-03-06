import { Box, FormControl, FormLabel, Input, InputGroup, Button, Center, Heading,InputRightElement, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import { apiClient } from '../utils/apiClient';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function SignIn() {
  const [isShowPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const loginButton = Object.freeze({
    name: 'ログイン',
    isLoading: '認証中...',
    color: 'blue',
  })
  const googleSignInButton = Object.freeze({
    name: 'Googleでログイン',
    color: 'blue',
    onClick: () => {
      location.assign('http://localhost:8080/api/signin/google');
    }
  })
  const initialValues = {
    username: '',
    password: ''
  }
  const onFormSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
    apiClient.signin.post({ body: { email: values.username, password: values.password }, config: { mode:'cors', credentials: 'include' } },).then(res =>{
      actions.setSubmitting(false);
      router.push('/profile');
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      <Head>
        <title>Sign In | Match</title>
      </Head>
      <Layout>
        <Box p={4}>
          <Center marginTop="32px">
          <Heading as="h2">Sign in to Match</Heading>
        </Center>
        <Box ml="auto" mr="auto" marginTop="32px" bg="white" w="100%" maxW={520} p={4} color="black" borderWidth="1px" borderRadius="lg">
          <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
            {
              (props: FormikProps<any>) => (
                <Form>
                  <Field name="username">
                    {({field, form}) => {
                      return (
                      <FormControl isRequired isInvalid={form.errors.username && form.touched.username}>
                        <FormLabel htmlFor="username">ユーザーネーム</FormLabel>
                        <InputGroup size="md">
                        <Input {...field} id="username" type="username" placeholder="Email" autoComplete="on" />
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                        </InputGroup>
                      </FormControl>)
                    }}
                  </Field>
                  <Field name="password">
                    {({field, form}) => {
                      return (
                        <FormControl isRequired marginY="16px" isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel htmlFor="user_password">パスワード</FormLabel>
                          <InputGroup size="md">
                          <Input {...field} id="user_password" type={isShowPassword ? 'text' : 'password'} placeholder="Password" autoComplete="on" />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!isShowPassword)}>
                              {isShowPassword ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </InputGroup>
                        </FormControl>
                      )
                    }}
                  </Field>
                  <Center marginTop="24px">
                    <Button type="submit" isLoading={props.isSubmitting} loadingText={loginButton.isLoading} colorScheme={loginButton.color} >{loginButton.name}</Button>
                    <Button type="button" colorScheme={googleSignInButton.color} variant="outline" onClick={googleSignInButton.onClick} >{googleSignInButton.name}</Button>
                  </Center>
                </Form>
              )
            }
          </Formik>
        </Box>
        </Box>
      </Layout>
    </>
  )
}