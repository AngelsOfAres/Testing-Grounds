'use strict'

import * as React from 'react'
import { Box, Center, Text, Link, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
    const buttonText4 = useColorModeValue('orange.300','cyan.300')
    return (
       <Box w="100%" h="10vh">
        <Center py='96px'>
          <Text textAlign='center' fontSize='8px' fontFamily="Orbitron" textColor={buttonText4}>
            <Link href="https://angelsofares.xyz/">
              Angels Of Ares, 2024. All Rights Reserved.
            </Link>
          </Text>
        </Center>
      </Box>
    )
}