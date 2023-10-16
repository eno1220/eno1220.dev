import { VStack, Box } from '@chakra-ui/react'

import AchievementCard from './AchievementCard'

const achievements = [
  {
    title: 'セキュリティ・キャンプ全国大会2023 Y1トラック（OS自作ゼミ）',
    term: '2023/08',
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
    <VStack spacing={1} mt={2} width='100%' align='left'>
      {achievements.map((achievement, index) => (
        <div key={`${achievement.title}-${index}`}>
          <AchievementCard title={achievement.title} term={achievement.term} />
          <Box h='1px' w='100%' bg='whiteAlpha.200' />
        </div>
      ))}
    </VStack>
  )
}

export default Achievements
