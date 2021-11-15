import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

// @ts-ignore
const RemoteHeader = React.lazy(() => import('header/Header'))

export function App() {
  return (
    <ChakraProvider>
      <React.Suspense fallback="Loading...">
        <RemoteHeader />
      </React.Suspense>
      <Flex as="main" p={3} justifyContent="center">
        <h1>Plugin Manager</h1>
      </Flex>
    </ChakraProvider>
  )
}

export default App
