import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const SideBarWrapper = styled.div`
  padding: 10%;
  box-shadow: -3px 7px 24px -10px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: -3px 7px 24px -10px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: -3px 7px 24px -10px rgba(0, 0, 0, 0.89);
  height: 100vh;
`;

export const SideBarLogo = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: black;
`;

export const SideBarLinksWrapper = styled.div`
  margin-top: 30%;
`;

export const SideBarLinks = styled.div`
  display: flex;
  flex-direction: space-between;
  margin-bottom: 2rem;
  cursor: pointer;

  background-color: ${(props) => (props.active ? "#fff9f9" : "")};
  & span {
    font-weight: 500;
    margin-left: 2rem;
  }
`;

export const SideBarBottomLinksWrapper = styled(SideBarLinksWrapper)`
  margin-top: 40%;
`;
export const SideBarBottomLinks = styled(SideBarLinks)``;

// =============== MAIN VIEW STYLES ==============

export const MainViewWrapper = styled(SideBarWrapper)`
  box-shadow: none;
  padding: 5%;
  width: 100%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SearchBar = styled.div``;

// ==========TO DO VIEW =============
export const TodoWrapper = styled.div`
  height: 70%;
`;

export const TodoBoxWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 3%;
`;

export const TodoBox = styled.div`
  height: 100%;
  background-color: rgba(226, 237, 235, 1);
  width: 30%;
  border-radius: 0.75rem;
  padding: 1rem;
  overflow: scroll;
`;

export const TodoHeader = styled.h1`
  color: grey;
`;

export const TodoTypes = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  & p {
    font-weight: 600;
    color: #585555;
  }
  & p:nth-child(2) {
    font-weight: 600;
    color: rgba(113, 211, 194, 1);
  }
`;

export const TodoAdd = styled(Button)`
  width: 100%;
  background-color: rgba(208, 233, 230, 1) !important;
  color: rgba(51, 189, 164, 1) !important;
  font-size: 1.2rem !important;
`;

export const TodoCreate = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: brown;
  border: 2px solid #000;
  padding: 12px;
`;
