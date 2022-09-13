import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContactForm = styled.div`
  ${media.forDesktop} {
    background: #ffffff 0 0 no-repeat padding-box;
    box-shadow: 0 0 40px #00000014;
    opacity: 1;
    padding: 50px;
  }

  margin: 100px;
  border-radius: 15px;
`;

export const StyledContactDetails = styled.div`
  background: ${colours.offWhite} 0 0 no-repeat padding-box;
  opacity: 1;
`;

export const StyledContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContactDetailType = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const StyledContactDetail = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledContactDetailValue = styled.div`
  width: 100%;
  margin-left: 75px;
  color: ${colours.grey};
`;

export const StyledContactDetailTypeTitle = styled.div`
  margin-left: 50px;
  color: ${colours.red};
  font-size: 20px;
  font: normal normal bold 20px/30px Roboto;
`;

export const StyledTitle = styled.div`
  text-align: center;
  font: normal normal bold 48px/36px Roboto;
  letter-spacing: 0px;
  color: #232323;
  text-transform: capitalize;
  margin: 0 100px 25px 100px;

  > span {
    color: ${colours.red};
  }
`;

export const StyledFieldSet = styled.fieldset`
  border: none;
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  padding: 10px;
  height: 20px;
  width: 20px;
  color: ${colours.grey};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0px 10px 50px;
  border: none;
  background: ${colours.offWhite};
  font-size: 20px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 0px 10px 50px;
  border: none;
  background: ${colours.offWhite};
  font-size: 20px;
`;

export const StyledSentMessage = styled.div`
  color: ${colours.red};
  font: normal normal bold 48px/36px Roboto;
  text-align: center;
`;

export const StyledErrorMessage = styled.div`
  color: red;
  margin-left: 50px;
  font: normal normal bold 20px/30px Roboto;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
`;
