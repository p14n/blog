import { css } from '@emotion/react';
import React from "react";
import { graphql, Link } from "gatsby";

const liClass = css`padding: 0 18px;
    display: inline-block;
    position: relative;
    font-size: 13px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    list-style: none;`;

const aClass = css`font-size: 16px;
font-weight: 400;
text-transform: uppercase;
color: #000;
line-height: 42px;
letter-spacing: 0.7px;
text-decoration: none;
position: relative;
transition: all 0.3s;
background-color: transparent;
outline: none;`;

export default () => {
    return (
    <nav css={css`
        padding-top: 7px;
        text-align: center !important;`}>
        <ul css={css`
            margin: 0;
            padding: 0;`}>
            <li css={liClass}><Link css={aClass} to="/">Home</Link></li>                 
            <li css={liClass}><Link css={aClass} to="/about">About</Link></li>                 
        </ul>
    </nav>
    );
}