import axios from 'axios'
import { isValidCPF } from '../utils/isValidCPF.js'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'

import { Formik, Form, Field } from 'formik'

export function Users() {
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (/[^a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value)) {
      error = 'Special characters is not allowed!'
    }
    return error
  }

  function validateBirth(value) {
    let error
    if (!value) {
      error = 'Birth date is required'
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      error = 'Insert a valid date!'
    }
    return error
  }

  function validateCPF(value) {
    let error

    if (!value) {
      error = 'CPF is required'
    } else if (!isValidCPF(value)) {
      error = 'Insert a valid CPF, with numbers only!'
    }
    return error
  }

  const toast = useToast()

  return (
    <Flex justifyContent='center' alignItems='center'>
      <Box
        border='1px'
        borderRadius='1rem'
        padding='1.5rem'
        mt='6rem'
        width='30vw'
      >
        <Text fontSize='1.5rem' mb='1rem'>
          Add User
        </Text>
        <Formik
          initialValues={{
            name: 'Your Name',
            birthDate: 'dd/mm/yyyy',
            cpf: 'xxx.xxx.xxx-xx',
          }}
          onSubmit={(values, actions) => {
            axios
              .post('http://localhost:3333/api/users', values)
              .then(() =>
                toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              )
              .catch()
          }}
        >
          {(props) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input {...field} id='name' placeholder='name' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='birthDate' validate={validateBirth}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.birthDate && form.touched.birthDate}
                  >
                    <FormLabel htmlFor='birthDate'>Birth Date</FormLabel>
                    <Input {...field} id='birthDate' placeholder='birthDate' />
                    <FormErrorMessage>{form.errors.birth}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='cpf' validate={validateCPF}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.cpf && form.touched.cpf}>
                    <FormLabel htmlFor='cpf'>CPF</FormLabel>
                    <Input {...field} id='cpf' placeholder='cpf' />
                    <FormErrorMessage>{form.errors.cpf}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
                w='100%'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}
