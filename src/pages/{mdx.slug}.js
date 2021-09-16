import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Box } from "theme-ui";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import BackgroundImage from '../images/bg-pattern-1.png';
import ProfileImage from '../images/profile_cartoon1.jpg';
import { css, cx } from '@emotion/css';
import Menu from '../components/menu';
import { Twitter,Linkedin } from 'react-social-sharing'

export default function PostPage({ data }) {
    console.log(data)
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
      <div className={css`
          background-image: url(${BackgroundImage});
          background-repeat: repeat;
          background-size: cover;
          margin: 30px;
          height: 60px;`}>
					<img src={ProfileImage} alt="avatar" className={css`
            border: 2px #fff solid;
            border-radius: 100%;
            width: 50px;
            margin: 5px;
            }`}/>
          <div className={css`
              margin-top: -65px;`}>

            <Menu/>
            </div>
      </div>    
      <div className={css`
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