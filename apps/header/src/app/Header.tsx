import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

const StyledApp = styled.div``;

export function Header() {
  return (
    <Box p={4} borderBottom="1px solid" borderColor="gray.100">
      <h3>header app</h3>
    </Box>
  );
}

export default Header;
