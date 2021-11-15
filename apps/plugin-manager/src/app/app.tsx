import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setProjectId } from '@monorepo-microservices/redux-store'

function loadComponent(scope: any, module: any) {
  return async () => {
    await __webpack_init_sharing__('default')

    const container: any = window[scope]

    await container.init(__webpack_share_scopes__.default)
    const factory: any = await (window[scope] as any).get(module)
    const Module = factory()
    return Module
  }
}

const useDynamicScript = (args: any) => {
  const [ready, setReady] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  React.useEffect(() => {
    if (!args.url) {
      return
    }

    const element = document.createElement('script')

    element.src = args.url
    element.type = 'text/javascript'
    element.async = true

    setReady(false)
    setFailed(false)

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`)
      setReady(true)
    }

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`)
      setReady(false)
      setFailed(true)
    }

    document.head.appendChild(element)

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`)
      document.head.removeChild(element)
    }
  }, [args.url])

  return {
    ready,
    failed,
  }
}

function System(props: any) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  })

  if (!props.system) {
    return <h2>Not system specified</h2>
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  )

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  )
}

export function App() {
  const [system, setSystem] = React.useState<any>(undefined)
  const projectId = useSelector((state: RootState) => state.projectId)
  const dispatch = useDispatch()

  useEffect(() => {
    setSystem({
      url: 'http://localhost:5001/remoteEntry.js',
      scope: 'header',
      module: './Header',
    })

    dispatch(setProjectId('some_id'))
  }, [])
  return (
    <ChakraProvider>
      <System system={system} />
      <Flex
        as="main"
        p={3}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <h1>Plugin Manager</h1>
        <Box>Project ID: {projectId}</Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
