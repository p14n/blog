import { graphql, Link } from "gatsby";
import React from "react";
import { Box } from "theme-ui";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Header } from "../components/header";
import Menu from '../components/menu';
import { css, cx } from '@emotion/css';
import { Twitter,Linkedin } from 'react-social-sharing';
/*const Post = ({ id, excerpt, frontmatter, slug }) => {
  console.log(frontmatter)
  return (<Box
    key={id}
    as="article"
    sx={{
      mb: 4,
      p: 3,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #d1d1d1",
      borderRadius: "15px",
    }}
  >
    <Link as={GatsbyLink} to={`/${slug}`}>
      <Heading>{frontmatter.title}</Heading>
      <Box as="p" variant="styles.p">
        {frontmatter.date}
      </Box>
      <Box as="p" variant="styles.p">
        {excerpt}
      </Box>
    </Link>
  </Box>);
}*/

const socialLiClass = css`line-height: 21px;display: inline-block;margin-right: 0.5rem;font-size: 13px;font-weight: 400;margin: 0;padding: 0;`;
const linkClass = css`color: #333;
text-decoration: none;
position: relative;
transition: all 0.3s;
outline: none;
background-color: transparent;`;

const NewPost = ({ id, excerpt, frontmatter, slug}) => {
  const { siteUrl } = useSiteMetadata();

  let [_,mon,day] = frontmatter.date.split(" ");
  console.log(frontmatter)
  return (<article key={id} className={css`margin-bottom: 110px;`}>
  <div className={css`position: relative;
      padding-left: 230px;
      padding-right: 100px;
      margin-bottom: 50px;`}>
    <div className={css`position: absolute;
      top: 0;
      left: 50px;`}>
        <b className={css`font-size: 90px;
            color: #ccc;
            font-weight: bold;
            line-height: 1;
            background: -webkit-linear-gradient(#eee, #999);
                background-clip: border-box;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700 !important;`}>{day}</b>
        <span className={css`font-size: 14px;
          text-transform: uppercase;
          font-weight: bold;
          color: #111;
          position: absolute;
          bottom: 14px;
          right: 0%;`}>{mon}</span>
    </div>
    <h2 className={css`margin-bottom: 10px;
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #000;
        font-family: "Montserrat", sans-serif;
        margin-top: 0;`}>
          <Link className={linkClass} to={`/${slug}`}>
              {frontmatter.title}
          {/*<a href="#"></a>*/}
          </Link>
      </h2>

  </div>
  { frontmatter.image ? 
    <div className={css`margin-top: 35px;
        margin-bottom: 35px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        border-radius: 0px;
        overflow: hidden;`}>
          <Link className={linkClass} to={`/${slug}`}>
      <img className={css`width: 100%;height:200px;
          object-fit: cover;
          display: inline-block;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;`} src={frontmatter.image.publicURL} alt="post-image"/>
          </Link>
    </div>
  : null }
  <div className={css`padding-left: 230px;
      padding-right: 100px;`}>
    <p className={css`margin-bottom: 26px;
        line-height: 30px;
        font-size: 16px;
        color: #111;
        font-weight: 400;`}>{excerpt}</p>
  
    {/*<span class="entry-meta bold float-right">Share</span>*/}
  </div>
  <ul className={css`float: right;padding-left: 20px; list-style: none;margin: 0;padding: 0;`}>
      <li className={socialLiClass}><Twitter link={`${siteUrl}/${slug}`} /></li>
      <li className={socialLiClass}><Linkedin link={`${siteUrl}/${slug}`} /></li>
  </ul>


</article>);
}

export default function IndexPage({ data }) {
    const {
        title,
        description,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
    } = useSiteMetadata();
  return (

    <>
    <Header siteTitle={title} siteDescription={description} />
    <div className={css`margin-top: -80px; margin-bottom: 20px;`}>
      <Menu/>
    </div>
    
    <Box
      as="div"
      sx={{
        margin: "0 auto",
        maxWidth: "80%",
        padding: "0 1.0875rem 1.45rem",
      }}
    >
      <Box as="main">
      <SEO
      title={`Home`}
      titleTemplate={title}
      description={description}
      pathname={siteUrl}
      siteLanguage={siteLanguage}
      siteLocale={siteLocale}
      twitterUsername={twitterUsername}
    />

  <section className={css`padding-top: 75px;
      padding-bottom: 75px;
      position: relative;
      display: block;`}>
		<div className={css`max-width: 960px;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;`}>
			<div className={css`display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;`}>
				<div className={css`margin-left: 8.3333333333%;flex: 0 0 83.3333333333%;
max-width: 83.3333333333%;`}>
    
      {data.allMdx.nodes.map(node => <NewPost {...node}/>)}

        </div>
      </div>
    </div>
  </section>

      </Box>
    </Box>
  </>


  );
}
/**
  

 
 */
export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          image { publicURL } 
          date(formatString: "YYYY MMM DD")
        }
        slug
      }
    }
  }
`;