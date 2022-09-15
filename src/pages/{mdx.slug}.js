import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { css } from '@emotion/react';
import { Twitter,Linkedin } from 'react-social-sharing'
import PageWrapper from "../components/page-wrapper";

export default function PostPage({ data }) {
  const {
    body,
    slug,
    excerpt,
    frontmatter: { title, date },
  } = data.mdx;
  const { siteUrl } = useSiteMetadata();  
  return (
    <PageWrapper title={title} description={excerpt} date={date} slug={slug}>
      <div css={css`
          max-width: 80%;
          margin: auto;
          padding-top: 30px;          
          `}>
        <Box as="h1" variant="styles.h1" fontSize="4xl">
          {title}
        </Box>
        <MDXRenderer>{body}</MDXRenderer>
        <Twitter link={`${siteUrl}/${slug}`} />
        <Linkedin link={`${siteUrl}/${slug}`} />
      </div>    
    </PageWrapper>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      excerpt
      frontmatter {
        date
        title
      }
    }
  }
`;