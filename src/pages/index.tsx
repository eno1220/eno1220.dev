import {
  Box,
  Container,
  Image,
  VStack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react'

import { SiTwitter, SiGithub, SiZenn } from 'react-icons/si'

import Achievements from '@/components/Achievements'
import Articles from '@/components/Articles'
import LinkButton from '@/components/LinkButton'
import Profile from '@/components/Profile'

export default function Home() {
  return (
    <>
      <Container
        maxW='3xl'
        py={8}
        px={{
          base: 4,
          md: 2,
        }}
      >
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
            src='eno1220.webp'
            alt='avatar'
          />
          <VStack spacing={3} align='left'>
            <Heading as='h1' size='xl'>
              eno1220
            </Heading>
            <Text fontSize='md' color='gray.300'>
              茨城県の中高一貫校に通う高校3年生です。webフロントエンドや低レイヤーなどに興味があります。
              <br />
              ヨルシカや日向坂46が好きです。
            </Text>
            <HStack
              spacing={{
                base: 2,
                md: 4,
              }}
              wrap='wrap'
            >
              <LinkButton
                href='https://github.com/eno1220'
                icon={<SiGithub />}
                username='eno1220'
                color='#E4EDF1'
              />
              <LinkButton
                href='https://twitter.com/1220_eno'
                icon={<SiTwitter />}
                username='1220_eno'
                color='#1DA1F2'
              />
              <LinkButton
                href='https://zenn.dev/eno1220'
                icon={<SiZenn />}
                username='eno1220'
                color='#3EA8FF'
              />
            </HStack>
          </VStack>
        </Box>
        <Box height='1px' bg='whiteAlpha.200' my={8} />
        <Heading as='h2' size='lg' mt={8}>
          Profile
        </Heading>
        <Profile />
        <Heading as='h2' size='lg' mt={8}>
          Articles
        </Heading>
        <Articles />
        <Heading as='h2' size='lg' mt={8}>
          Achievements
        </Heading>
        <Achievements />
        <Heading as='h2' size='lg' mt={8}>
          Contact
        </Heading>
        <Text fontSize='md' mt={2} fontWeight='bold'>
          eno1220 [at] this domain
        </Text>
        <Text fontSize='sm' color='gray.300' mt={2}>
          TwitterやDiscord（ユーザ名:eno1220）のDMでも受け付けています。
        </Text>
      </Container>
    </>
  )
}
