import { Container, Box, Heading, Flex, Spacer, Text,Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Heading as="header">
        <Box borderTop="8px" borderTopColor="#FFC0CB" borderBottom="1px solid #ebebeb" >
          <Flex height="72px" px="16px" align="center">
          <Box p="2">
              <Heading size="lg">
                <NextLink href="/" passHref>
                  <Link>Match</Link>
                  </NextLink>
              </Heading>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center">
              {router.pathname === '/signin' || (router.pathname !== '/signin' && router.pathname !== '/signup') ? (
              <NextLink href="/signup" passHref>
                <Link mr="4">
                  <Text fontSize="md"  noOfLines={1}>Sign Up</Text>
                </Link>
              </NextLink>) : null
              }
              {router.pathname === '/signup' || (router.pathname !== '/signin' && router.pathname !== '/signup') ? (
              <NextLink href="/signin" passHref>
                <Link mr="4">
                  <Text fontSize="md" noOfLines={1}>Sign In</Text>
                </Link>
              </NextLink>) : null
              }
            </Flex>
          </Box>
        </Flex>
        </Box>
      </Heading>
      <Box>
        {children}
      </Box>
    </>
  )
}