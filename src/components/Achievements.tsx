import { VStack, Box } from '@chakra-ui/react'

import AchievementCard from './AchievementCard'

const achievements = [
  {
    title: 'セキュリティ・キャンプ全国大会2023 Y1トラック（OS自作ゼミ）',
    term: '2023/06 -',
  },
  {
    title: '国立情報学研究所「情報科学の達人」 4期生',
    term: '2023/04 -',
  },
  {
    title: '情報オリンピック（JOI）2022/23 本選出場',
    term: '2023/02',
  },
  {
    title: 'パソコン甲子園2022 プログラミング部門 本選出場',
    term: '2022/11',
  },
]

const Achievements = () => {
  return (
    <VStack spacing={1} mt={2}>
      {achievements.map((achievement) => (
        <>
          <AchievementCard title={achievement.title} term={achievement.term} />
          <Box h='1.5px' w='100%' bg='whiteAlpha.200' />
        </>
      ))}
    </VStack>
  )
}

export default Achievements
