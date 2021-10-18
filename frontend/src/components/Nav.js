import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <Flex
      bg='teal.500'
      justifyContent='space-around'
      alignItems='center'
      height='4rem'
    >
      <Link to='/'>
        <Text fontSize='2rem' fontWeight='bold'>
          Users
        </Text>
      </Link>
      <Link to='/dogs'>
        <Text fontSize='2rem' fontWeight='bold'>
          Dogs
        </Text>
      </Link>
      <Link to='/adoption'>
        <Text fontSize='2rem' fontWeight='bold'>
          Adoption
        </Text>
      </Link>
    </Flex>
  )
}
