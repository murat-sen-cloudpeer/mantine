import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useMantineTheme, Button, Box, Overlay } from '@mantine/core';

const code = `
import { Overlay, Button, Box, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={\`linear-gradient(105deg, \${theme.black} 20%, #312f2f 50%, \${theme.colors.gray[4]} 100%)\`}
      />
    </Box>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
      />
    </Box>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
