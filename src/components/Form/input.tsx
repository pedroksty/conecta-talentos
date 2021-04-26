import { Input as ChakraInput, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldErrors } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldErrors
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="green.600"
        borderColor="green.400"
        bgColor="gray.100"
        variant="filled"
        placeholder={label}
        _hover={{
          bgColor: 'gray.200'
        }}
        size="lg"
        ref={ref}
        {...rest}
        />

        {
          !!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )
        }
   </FormControl>
  )
}

export const Input = forwardRef(InputBase)
