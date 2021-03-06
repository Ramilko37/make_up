import styled from 'styled-components';
import images from "../../utils/images";


export const WhyMeContainer = styled.div`
  display: flex;
  padding-left: 64px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const WhyMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px){
    border: 1px solid red;
    width: 375px;
  }
`;

export const WhyMeTitle = styled.h2`
  width: fit-content;
  color: black;
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 126.6%;
  margin: 0 0 64px 0;
  letter-spacing: 0.01em;
  @media screen and (max-width: 375px){
    margin: 72px 0 32px 16px;
    width: 375px;
    font-size: 28px;
    line-height: 135%;
  }
`;

export const WhyMeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 918px;
`;

export const WhyMeAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 350px;
`;

export const WhyMeSubtitle = styled.h6`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 8px;
  color: #4C4248;
  @media screen and (max-width: 375px){
    margin-left: 16px;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #6D5F67;
  }
`;

export const WhyMeParagraph = styled.p`
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #6D5F67;
  max-width: 317px;
  @media screen and (max-width: 375px){
    margin: 0 0 0 16px;
  }
`;

export const WhyMePhoto = styled.div`
  display: inline;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${images.about_photo});
  width: 580px;
  height: 730px;
  
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
