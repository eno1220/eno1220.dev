import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'

export type NextImageProps = {
  src: string
  alt: string
}

const NextImage = ({ src, alt }: NextImageProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      as='figure'
      my={4}
    >
      <Box
        mx='auto'
        mb={2}
        style={{
          objectFit: 'contain',
        }}
      >
        <Image src={src} alt={alt} width={500} height={500} />
      </Box>
      <Text fontSize='sm' color='gray.400' as='figcaption'>
        {alt}
      </Text>
    </Box>
  )
}

export default NextImage
