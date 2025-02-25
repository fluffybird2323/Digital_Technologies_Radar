import { Box } from '@chakra-ui/layout';
import React from 'react';

import { MenuLinks } from './MenuLinks';
// import { MenuToggle } from './MenuToggle';
import { UNLogo } from './components/UNLogo';
import { UNDPLogo } from './components/UNDPLogo';
import { Flex } from '@chakra-ui/react';

// taken from https://github.com/dimitrisraptis96/chakra-ui-navbar/tree/main/src
export const AppNavbar: React.FC = () => {
  // TODO: mobile menu opening
  // const [isOpen, setIsOpen] = React.useState(true);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      w={75}
      direction={'column'}
      alignItems={'center'}
      py={5}
      style={{ borderRight: '1px solid lightgray' }}
    >
      <Box>
        <UNLogo p={1} />
      </Box>

      <Box flex={1} display={'flex'}>
        {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
        <MenuLinks isOpen />
      </Box>

      <Box>
        <UNDPLogo />
      </Box>
    </Flex>
  );
};
