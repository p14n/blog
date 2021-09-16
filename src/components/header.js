import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box, Flex, Heading, Link } from "theme-ui";
import { css, cx } from '@emotion/css'
import BackgroundImage from '../images/bg-pattern-1.png';
import ProfileImage from '../images/profile_cartoon1.jpg';
import IconImage from '../images/icon-img.png';

const liClass = css`
  margin-right: 20px;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  display: inline-block;`

const socialIconClass = css`
  background-image: url(${IconImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  display: inline-block;`;

export const Header = ({ siteTitle, siteDescription }) => {
  return (

    <section className={css`
      padding-top: 60px;
      padding-bottom: 70px;
      background-image: url(${BackgroundImage});
      background-repeat: repeat;
      background-size: cover;
      margin: 30px;
      margin-bottom: 30px;
      margin-bottom: 0;`}>
		<div className={css`
      max-width: 960px;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;`}>
			<div className={css`
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;`}>
				<div className={css`position: relative;
            padding-right: 15px;
            padding-left: 15px;`}>
					<img src={ProfileImage} alt="avatar" className={css`
            border: 10px #fff solid;
            border-radius: 100%;
            width: 300px;
            }`}/>
				</div>
				<div className={css`text-align: left !important;
          flex: 0 0 50%;
          max-width: 50%;
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;`}>
					<h1 className={css`font-family: "Montserrat", sans-serif;
            margin-top: 20px;
            font-size: 70px;
            line-height: 80px;
            color: #000;
            font-weight: bold;
            margin-bottom: 20px;`}> {siteTitle} </h1>
					<p className={css`font-size: 32px;
            color: #000;
            font-weight: 300;
            line-height: 48px;
            margin-bottom: 10px;`}> {siteDescription} <span class="txt-rotate" data-period="2000" data-rotate='[ "devloper.", "designer.", "artist.", "writter." ]'></span> </p>
					<ul className={css`padding-left: 0;
list-style: none;`}>
						<li className={liClass}><a href="https://www.linkedin.com/in/dpchapman/"><i className={css`${socialIconClass}; background-position: -118px 0;`}></i></a></li>
						<li className={liClass}><a href="https://twitter.com/AnActualDean"><i className={css`${socialIconClass}; background-position: -248px 0;`}></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>

  );
};

{/* <Box as="header" sx={{ 
      bg: "highlight", 
      mb: "1.45rem"
      }}>
      <Box
        as="div"
        sx={{
          m: "0 auto",
          maxWidth: "90%",
          p: "1.45rem 1.0875rem",
        }}
      >
        <Flex>
          <Box sx={{ flex: "1 1 auto", flexDirection: "column" }}>
            <Link as={GatsbyLink} to="/">
              <Heading>{siteTitle}</Heading>
            </Link>
            <Box as="p" variant="styles.p">
            {siteDescription}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box> */}