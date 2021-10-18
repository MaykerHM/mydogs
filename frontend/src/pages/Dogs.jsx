import axios from 'axios'

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

export function Dogs() {
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (/[^a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value)) {
      error = 'Special characters is not allowed!'
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
          Add Dog
        </Text>
        <Formik
          initialValues={{
            name: 'Dogs Name',
          }}
          onSubmit={(values, actions) => {
            axios
              .post('http://localhost:3333/api/dogs', {
                name: values.name,
                userId: null,
              })
              .then(() => {
                toast({
                  title: 'Dog register created.',
                  description: "We've created a new dog register.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
                actions.setSubmitting(false)
              })
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
