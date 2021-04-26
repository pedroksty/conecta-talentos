import { Select as ChakraSelect, FormControl, SelectProps as ChakraSelectProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import { FieldErrors } from 'react-hook-form'

interface SelectProps extends ChakraSelectProps {
  name: string
  label?: string
  error?: FieldErrors
  children: ReactNode
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ name, label, error = null, children, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraSelect
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
        >
          {children}

        </ChakraSelect>

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

export const Select = forwardRef(SelectBase)
