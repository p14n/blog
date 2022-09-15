import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box, Flex, Heading, Link } from "theme-ui";
import { css } from '@emotion/react'
import BackgroundImage from '../images/bg-pattern-1.png';
import ProfileImage from '../images/Profile_cartoon1_280.jpg';
import IconImage from '../images/icon-img.png';
import mq from '../media-queries';

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

    <section css={css`
      padding-top: 60px;
      padding-bottom: 70px;
      background-image: url(${BackgroundImage});
      background-repeat: repeat;
      background-size: cover;
      margin: 30px;
      ${mq[0]} {
        padding-bottom: 0;
      }
      margin-bottom: 0;

`}>
		<div css={css`
      max-width: 960px;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;`}>
			<div css={css`
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;`}>
				<div css={css`position: relative;
            padding-right: 15px;
            padding-left: 15px;`}>
					<img src={ProfileImage} alt="avatar" css={css`
            border: 10px #fff solid;
            border-radius: 100%;
            width: 300px;
            ${mq[0]} {
              width: 150px;
            }
            }`}/>
				</div>
				<div css={css`text-align: left !important;
          flex: 0 0 50%;
          max-width: 50%;
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;`}>
					<h1 css={css`font-family: "Montserrat", sans-serif;
            margin-top: 20px;
            font-size: 70px;
            ${mq[0]} {
              font-size: 50px;
              line-height: 50px;
            }
            line-height: 80px;
            color: #000;
            font-weight: bold;
            margin-bottom: 20px;`}> {siteTitle} </h1>
					<p css={css`font-size: 32px;
            color: #000;
            font-weight: 300;
            ${mq[0]} {
              font-size: 20px;
              line-height: 20px;
            }
            line-height: 48px;
            margin-bottom: 10px;`}> {siteDescription} <span class="txt-rotate" data-period="2000" data-rotate='[ "devloper.", "designer.", "artist.", "writter." ]'></span> </p>
					<ul css={css`padding-left: 0;
list-style: none;`}>
						<li css={liClass}><a href="https://www.linkedin.com/in/dpchapman/"><i className={css`${socialIconClass}; background-position: -118px 0;`}></i></a></li>
						<li css={liClass}><a href="https://twitter.com/AnActualDean"><i className={css`${socialIconClass}; background-position: -248px 0;`}></i></a></li>
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