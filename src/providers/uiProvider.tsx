'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function UiProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
