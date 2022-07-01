import styled from "@emotion/styled";
import React, { useState } from "react";

import sideImage from "../assets/drawers.jpg";
import Avatar from "../assets/avatar-michelle.jpg";
import { ReactComponent as Share } from "../assets/icon-share.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;
  background: antiquewhite;

  font-family: "Manrope";
  font-style: normal;
  box-sizing: border-box;
`;

const FlexContainer = styled.div`
  display: flex;
  height: max-content;
  width: 730px;
  height: 280px;
  border-radius: 10px;
  background: #fff;

  @media screen and (max-width: 480px) {
    width: 90%;
    height: auto;
    min-height: 512px;
    flex-direction: column;
  }
`;

const ImageFlex = styled.div`
  height: 100%;

  width: max-content;
  flex: 1.5;
  overflow: hidden;
  border-radius: 10px 0 0 10px;

  @media screen and (max-width: 480px) {
    max-height: 200px;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  img {
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
`;

const ContentFlex = styled.article`
  padding: 2rem 2.5rem;
  text-align: left;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    padding: 2.5rem 2rem 1rem 2rem;
    box-sizing: border-box;
  }
`;

const Header = styled.h1`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  letter-spacing: 0.25px;

  color: #48556a;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */

  letter-spacing: 0.121875px;

  color: #6e8098;

  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0 2rem 0;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .avatar {
    border-radius: 50%;
    height: 2.5rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.121875px;

    color: #48556a;
    .subtitles {
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      /* identical to box height, or 154% */

      letter-spacing: 0.121875px;

      color: #9daec2;
    }
  }
`;

const ShareContainer = styled.div`
  margin-left: auto;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 480px) {
    position: static;
  }

  :hover {
    #shareicon {
      background: #6e8098;

      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
`;

const ShareIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
  background: #ecf2f8;

  svg {
    padding-left: 1px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: #48556a;
  top: calc(-100% - 32px);
  display: flex;
  align-items: center;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(201, 213, 225, 0.503415);
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  letter-spacing: 5px;

  color: #9daec2;
  text-transform: uppercase;
  z-index: 0;

  ::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: #48556a transparent transparent transparent;
  }

  @media screen and (max-width: 480px) {
    bottom: -1rem;
    left: -2rem;
    top: auto;
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 1.5rem 2rem;

    ::after {
      content: none;
    }
  }
`;

const Attribution = styled.footer`
  padding-top: 2rem;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const ArticlePreview = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Container>
      <FlexContainer>
        <ImageFlex>
          <img src={sideImage} alt="" />
        </ImageFlex>
        <ContentFlex>
          <Header>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Header>
          <Description>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.{" "}
          </Description>
          <AvatarContainer>
            <img className="avatar" src={Avatar} alt="avatar" />
            <span className="profile">
              <span>Michelle Appleton</span>{" "}
              <span className="subtitles">28 Jun 2020</span>
            </span>
            <ShareContainer
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {showTooltip && (
                <Tooltip>
                  <span style={{ paddingRight: "21px" }}>share</span>
                  <SocialContainer>
                    <Facebook />
                    <Twitter style={{ margin: "0 1rem" }} />
                    <Pinterest />
                  </SocialContainer>
                </Tooltip>
              )}
              <ShareIcon id="shareicon">
                <Share />
              </ShareIcon>
            </ShareContainer>
          </AvatarContainer>
        </ContentFlex>
      </FlexContainer>
      <Attribution>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/yogeshdatir"
          target="_blank"
          rel="noreferrer"
        >
          Yogesh D
        </a>
        .
      </Attribution>
    </Container>
  );
};

export default ArticlePreview;
