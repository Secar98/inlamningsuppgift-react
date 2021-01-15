import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 2px solid #006400;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 2px;
  margin-top: 25px;

  &:hover {
    transition: 0.3s;
    background-color: #66a266;
  }
`;

export const StyledNewButton = styled(StyledButton)`
  background-color: red;
  margin-right: 10px;

  &:hover {
    transition: 0.3s;
    background-color: #8b0000;
  }
`;

export const StyledDetailDiv = styled.div`
  border: 1px solid black;
  width: 50%;
  margin: 5px;
  padding: 5px;
  border: 5px solid #006400;
  background-color: #66a266;
`;

export const StyledLabel = styled.label`
  text-decoration: none;
  font-size: 2em;
  margin: 10px;
  display: block;
  text-align: center;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  border: 2px solid #006400;
  border-radius: 5px;
  display: block;
  font-size: 1.2em;
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledLogginDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #006400;
  background-color: #66a266;
  padding: 40px;
`;

export const StyledWrapDiv = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  border: 5px solid #006400;
  background-color: #66a266;
`;

export const StyledParagraph = styled.p`
  font-size: 1.2em;
`;

export const StyledDiv = styled.div`
  padding: 5px;
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  margin: auto auto;
`;

export const StyledNavUl = styled.ul`
  background-color: #66a266;
  padding: 10px;
  margin: 0px;
  margin-bottom: 30px;
`;

export const StyledNavLi = styled.li`
  display: inline;
  font-size: 2em;
  margin-left: 10px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-shadow: 1px 1px black;
    }
  }
`;
