import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import SEO from "react-seo-component";
import BackgroundImage from '../images/bg-pattern-1.png';
import ProfileImage from '../images/Profile_cartoon1.jpg';
import Menu from '../components/menu';
import { css } from '@emotion/css';

export default ({ children,slug,description,title,date}) => {
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
        description={description}
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
      {children}
    </>
  );
}
