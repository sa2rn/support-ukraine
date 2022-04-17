import Head from 'next/head';
import {
  BaseStyles, ThemeProvider, Text, theme, Box, Heading,
} from '@primer/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Field from '../components/Field';
import useCodeGenerator from '../hooks/useCodeGenerator';

const DEFAULT_STYLE = {
  '--support-ua-font-family': '\'Roboto\', sans-serif',
  '--support-ua-bg-color': '#f5f5f5',
  '--support-ua-font-weight': 'normal',
  '--support-ua-text-align': 'center',
  '--support-ua-padding': '15px',
  '--support-ua-font-size': '18px',
  '--support-ua-link-color': '#000000',
  '--support-ua-link-hover-color': '#888888',
};

export default function Home() {
  const { connect, style, codeString } = useCodeGenerator(DEFAULT_STYLE);

  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Head>
          <title>Support Ukraine banner</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="google-site-verification" content="h8wqwkV6NH_AtfMflXQ6X3LBljyKO2zHfBW8QJ2rIJI" />
          <script src="https://unpkg.com/support-ukraine-banner/dist/main.min.js" defer></script>
        </Head>
        <Box maxWidth="medium" m="0 auto" p={3}>
          <Heading as="h1" sx={{ textAlign: 'center' }}>
            Support Ukraine banner
          </Heading>
          <Text as="p" sx={{ fontSize: 3 }}>Make your own design</Text>
          <Box>
            <Field label="Background color" type="color" {...connect('--support-ua-bg-color')} />
            <Field label="Font size" type="number" trailingVisual="px" {...connect('--support-ua-font-size')} />
            <Field label="`Padding" type="number" trailingVisual="px" {...connect('--support-ua-padding')} />
            <Field label="Link color" type="color" {...connect('--support-ua-link-color')} />
            <Field label="Link hover color" type="color" {...connect('--support-ua-link-hover-color')} />
          </Box>
          <Box mb={3}>
            <Heading sx={{ mb: 3, fontSize: 3 }}>Preview:</Heading>
            <support-ukraine style={style}></support-ukraine>
          </Box>
          <Box>
            <Heading sx={{ mb: 3, fontSize: 3 }}>Code:</Heading>
            <SyntaxHighlighter language="html" style={prism}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
