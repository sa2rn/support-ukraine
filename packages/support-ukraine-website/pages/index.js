import Head from 'next/head';
import {
  BaseStyles, ThemeProvider, Text, theme, Box, Heading,
} from '@primer/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Field from '../components/Field';
import Choice from '../components/Choice';
import useCodeGenerator from '../hooks/useCodeGenerator';

const LANGUAGE_OPTIONS = [
  { value: '', label: 'Auto detect' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'ru', label: 'Russian' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'pl', label: 'Polish' },
  { value: 'fr', label: 'French' },
  { value: 'th', label: 'Thai' },
];

export default function Home() {
  const {
    connect, codeString, attributes, style,
  } = useCodeGenerator();

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
            <Field label="Background color" type="color" {...connect('style[--support-ua-bg-color]')} />
            <Field label="Font size" type="number" trailingVisual="px" {...connect('style[--support-ua-font-size]')} />
            <Field label="Padding" type="number" trailingVisual="px" {...connect('style[--support-ua-padding]')} />
            <Field label="Link color" type="color" {...connect('style[--support-ua-link-color]')} />
            <Field label="Link hover color" type="color" {...connect('style[--support-ua-link-hover-color]')} />
            <Field label="Language" type="text" as={Choice} options={LANGUAGE_OPTIONS} {...connect('attributes[lang]')} />
          </Box>
          <Box mb={3}>
            <Heading sx={{ mb: 3, fontSize: 3 }}>Preview:</Heading>
            <support-ukraine style={style} {...attributes}></support-ukraine>
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
