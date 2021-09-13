import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/use-site-metadata";


export default function PostPage({ data }) {
  const {
    body,
    slug,
    excerpt,
    frontmatter: { title, date },
  } = data.mdx;
  const {
        title: siteTitle,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
        authorName,
    } = useSiteMetadata();  
  return (
    <>
    <link href="https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css" rel="stylesheet" type="text/css" />

      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        pathname={`${siteUrl}${slug}`}
        article={true}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />    
      <Box as="h1" variant="styles.h1" fontSize="4xl">
        {title}
      </Box>
      <MDXRenderer>{body}</MDXRenderer>
    </>
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