import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import dayjs from 'dayjs'
import { getSiteName } from '@/libs/utils'

const ArticleCard = ({
  title,
  publishedAt,
  href,
}: {
  title: string
  publishedAt: string
  href: string
}) => {
  return (
    <Box as={NextLink} href={href}>
      <Box
        width='100%'
        height='100%'
        px={4}
        py={3}
        bg='whiteAlpha.200'
        display='flex'
        flexDirection='column'
        gap={2}
        rounded='md'
        transition='all 0.2s'
        _hover={{
          bg: 'whiteAlpha.300',
        }}
      >
        <Text fontSize='md' fontWeight='bold' color='gray.300'>
          {title}
        </Text>
        <HStack spacing={2} fontSize='sm' color='gray.400' mt='auto'>
          <Text>{getSiteName(href)}</Text>
          <Text>{dayjs(publishedAt).format('YYYY/MM/DD')}</Text>
        </HStack>
      </Box>
    </Box>
  )
}

export default ArticleCard
