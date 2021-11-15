import styled from '@emotion/styled'
import { Box, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setProjectId } from '@monorepo-microservices/redux-store'

const StyledApp = styled.div``

const generateHash = () => {
  return (Math.random() + 1).toString(36).substring(7)
}
export function Header() {
  const projectId = useSelector((state: RootState) => state.projectId)
  const dispatch = useDispatch()

  return (
    <Box p={4} borderBottom="1px solid" borderColor="gray.100">
      <h3>header {projectId}</h3>
      <Button onClick={() => dispatch(setProjectId(generateHash()))}>
        set new id
      </Button>
    </Box>
  )
}

export default Header
