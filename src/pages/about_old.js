import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";
import { css } from '@emotion/css';
import PageWrapper from "../components/page-wrapper";

export default function PostPage({ data }) {
  return (
    <PageWrapper title={"About Dean"} description={"My background and resumé"} date={'2021-09-01'} slug={'/about'}>
      <div className={css`
          max-width: 80%;
          margin: auto;
          padding-top: 30px;          
          `}>
        <Box as="h1" variant="styles.h1" fontSize="4xl">
          {'About Dean'}
        </Box>
        <MDXRenderer>{`### My background`}</MDXRenderer>
      </div>    
    </PageWrapper>
  );
}
