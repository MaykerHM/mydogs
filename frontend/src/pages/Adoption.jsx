import { useEffect, useState } from 'react'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import axios from 'axios'

export function Adoption() {
  let [strayDogs, setStrayDogs] = useState([])
  let [users, setUsers] = useState([])
  let [selectedDog, setSelectedDog] = useState(null)
  let [selectedUser, setSelectedUser] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3333/api/dogs/stray')
      .then((res) => setStrayDogs(res.data))
    axios
      .get('http://localhost:3333/api/users')
      .then((res) => setUsers(res.data))
  }, [])

  const handleAdopt = () => {
    axios.put(
      'http://localhost:3333/api/dogs',
      {
        params: {
          dogId: selectedDog.id,
        },
      },
      {
        userId: selectedUser.id,
        name: selectedDog.name,
      }
    )
  }

  return (
    <Flex flexDir='column' alignItems='center'>
      <Box w='40vw'>
        <Flex
          alignItems='center'
          flexDir='column'
          mt='6rem'
          border='1px'
          borderRadius='1rem'
          padding='0.5rem'
        >
          <Flex justifyContent='space-around' w='100%' mb='3rem'>
            <Flex flexDir='column' w='100%' alignItems='center'>
              <Text fontSize='1.5rem' mb='1rem'>
                User
              </Text>
              <Flex flexDir='column' w='100%'>
                <Box bg='teal.400' mb='0.5rem' mr='0.5rem' p='1rem'>
                  <Flex justifyContent='space-around' w='100%'>
                    <Text>name: {selectedUser?.name}</Text>
                    <Text>id:{selectedUser?.id}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex flexDir='column' w='100%' alignItems='center'>
              <Text fontSize='1.5rem' mb='1rem'>
                Dog
              </Text>
              <Flex flexDir='column' w='100%'>
                <Box bg='teal.400' mb='0.5rem' p='1rem'>
                  <Flex justifyContent='space-around' w='100%'>
                    <Text>name: {selectedDog?.name}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Button colorScheme='teal' w='100%' onClick={() => handleAdopt()}>
            Adopt
          </Button>
        </Flex>
      </Box>
      <Flex justifyContent='space-between' w='70vw'>
        <Box w='30vw'>
          <Flex
            alignItems='center'
            flexDir='column'
            mt='6rem'
            border='1px'
            borderRadius='1rem'
            padding='0.5rem'
          >
            <Text fontSize='1.5rem' mb='1rem'>
              Users
            </Text>
            {users.map((user) => {
              return (
                <Flex flexDir='column' w='100%' key={user.id}>
                  <Button
                    colorScheme='teal'
                    mb='0.5rem'
                    onClick={() => setSelectedUser(user)}
                  >
                    <Flex justifyContent='space-around' w='100%'>
                      <Text>name: {user?.name}</Text>
                      <Text>id:{user?.id}</Text>
                    </Flex>
                  </Button>
                </Flex>
              )
            })}
          </Flex>
        </Box>
        <Box w='30vw'>
          <Flex
            alignItems='center'
            flexDir='column'
            mt='6rem'
            border='1px'
            borderRadius='1rem'
            padding='0.5rem'
          >
            <Text fontSize='1.5rem' mb='1rem'>
              Stray Dogs
            </Text>
            {strayDogs.map((strayDog) => {
              return (
                <Flex flexDir='column' w='100%' key={strayDog.id}>
                  <Button
                    colorScheme='teal'
                    mb='0.5rem'
                    onClick={() => setSelectedDog(strayDog)}
                  >
                    <Flex justifyContent='space-around' w='100%'>
                      <Text>name: {strayDog?.name}</Text>
                    </Flex>
                  </Button>
                </Flex>
              )
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
