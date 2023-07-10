import Image from 'next/image'
import Link from 'next/link'

import { Box, Text } from '@chakra-ui/react'

export type NextImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

const NextImage = ({ src, alt, width, height }: NextImageProps) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      as='figure'
      my={4}
    >
      <Link href={src} passHref>
        <Box
          mx='auto'
          mb={2}
          style={{
            objectFit: 'contain',
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{
              borderRadius: '0.5rem',
              boxShadow: '0 0 0.75rem rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>
      </Link>
      <Text fontSize='sm' color='gray.400' as='figcaption'>
        {alt}
      </Text>
    </Box>
  )
}

export default NextImage
