import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <Flex bg='gray.500' justifyContent='space-around'>
      <Link to='/'>
        <Text fontSize='2rem'>Users</Text>
      </Link>
      <Link to='/dogs'>
        <Text fontSize='2rem'>Dogs</Text>
      </Link>
      <Link to='/adoption'>
        <Text fontSize='2rem'>Whose dog is it?</Text>
      </Link>
    </Flex>
  )
}
