import Head from 'next/head'

import { Box, Container, Image, VStack, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='4xl' py={8}>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          gap={8}
          as='header'
        >
          <Image
            borderRadius={'full'}
            boxSize={28}
            src='eno1220.jpg'
            alt='avatar'
          />
          <VStack spacing={4} align='left'>
            <Heading as='h1' size='xl' fontFamily='lineSeedJP'>
              eno1220
            </Heading>
            <Text fontSize='md' color='gray.300'>
              茨城県の中高一貫校に通う高校3年生です。webフロントエンドや低レイヤーなどに興味があります。
              <br />
              ヨルシカや日向坂46が好きです。
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  )
}
