import {
  Text,
  VStack,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/ja'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ja')

const ProfileCard = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <Grid
      width='100%'
      py={2}
      borderBottom='1px'
      borderBottomColor='whiteAlpha.200'
      templateColumns='repeat(4, 1fr)'
      gap={4}
    >
      <GridItem>
        <Text fontSize='md' fontWeight='bold'>
          {title}
        </Text>
      </GridItem>
      <GridItem colSpan={3}>{children}</GridItem>
    </Grid>
  )
}

const Profile = () => {
  const age = dayjs().tz('Asia/Tokyo').diff(dayjs('2005-12-20'), 'year')
  return (
    <>
      <VStack spacing={1} align='left' mt={2}>
        <ProfileCard title='名前'>
          <Text>eno1220</Text>
        </ProfileCard>
        <ProfileCard title='年齢'>
          <Text>{age}歳 （2005年12月20日生まれ）</Text>
        </ProfileCard>
        <ProfileCard title='学年'>
          <Text>高校3年生</Text>
        </ProfileCard>
        <ProfileCard title='興味'>
          <UnorderedList spacing={1}>
            <ListItem>webフロントエンド</ListItem>
            <ListItem>競技プログラミング</ListItem>
            <ListItem>
              低レイヤー
              <UnorderedList spacing={1} mt={1}>
                <ListItem>OS</ListItem>
                <ListItem>コンパイラ</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ProfileCard>
        <ProfileCard title='エディタ'>
          <Text fontSize='md'>VSCode</Text>
        </ProfileCard>
        <ProfileCard title='言語'>
          <UnorderedList spacing={1}>
            <ListItem>日本語</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Rust</ListItem>
            <ListItem>C</ListItem>
            <ListItem>C++</ListItem>
          </UnorderedList>
        </ProfileCard>
        <ProfileCard title='好き'>
          <UnorderedList spacing={1}>
            <ListItem>日向坂46</ListItem>
            <ListItem>ヨルシカ</ListItem>
          </UnorderedList>
        </ProfileCard>
      </VStack>
    </>
  )
}
export default Profile
