import { VStack, Text } from '@chakra-ui/react'

const AchievementCard = ({ title, term }: { title: string; term: string }) => {
  return (
    <VStack width='100%' spacing={0.5} align='left' my={1.5}>
      <Text fontSize='md'>{term}</Text>
      <Text fontSize='md' fontWeight='bold'>
        {title}
      </Text>
    </VStack>
  )
}

export default AchievementCard
