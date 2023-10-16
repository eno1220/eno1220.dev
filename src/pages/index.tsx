import NextLink from 'next/link'

import {
  Box,
  Container,
  Image,
  VStack,
  Heading,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { SiTwitter, SiGithub, SiZenn } from 'react-icons/si'

import Achievements from '@/components/Achievements'
import Articles from '@/components/Articles'
import LinkButton from '@/components/LinkButton'
import Profile from '@/components/Profile'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

export default function Home() {
  const year = dayjs().tz().year()
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
            <Text fontSize='md'>
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
          Link Exchange
        </Heading>
        <Text fontSize='sm' mt={2}>
          相互リンクを募集しています。お気軽にご連絡ください。
        </Text>
        <Box height='1px' bg='whiteAlpha.200' my={4} />
        <Text fontSize='sm' mt={6}>
          View source code on
          <Link href='https://github.com/eno1220/eno1220.dev' as={NextLink}>
            <Text
              as='span'
              color='gray.400'
              ml={1}
              fontWeight='bold'
              textDecoration='underline'
            >
              GitHub
            </Text>
          </Link>
          .
        </Text>
        <Text textAlign='left' fontSize='sm' mt={1}>
          ©{year} eno1220
        </Text>
      </Container>
    </>
  )
}
