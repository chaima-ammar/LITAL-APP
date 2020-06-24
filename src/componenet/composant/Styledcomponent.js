import styled from "styled-components";


export const BackgroundStyled = styled.div`
width: 100%;
z-index: 100;
height: 100%;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.7);
opacity: ${props => (props.show ? "1" : "0")};
visibility: ${props => (props.show ? "visibile" : "hidden")};
transition: all 0.3s;
`;
export const Flexdivinput = styled.div `
maxWidth=1000px;
dispaly:flex;
justify-content: space-around;

`
export const SidebarStyled = styled.div`
position: fixed;
z-index: 555;
top: 0;
left: 0;
width: 80%;
background-color: #695548;
padding: 1rem;
color: #fff;
max-width: 300px;
height: 100%;
transform: translateX(${props => (props.show ? "0" : "-100%")});
transition: all 0.3s ease-in-out;
`;
export const SidebarWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
`;
export const Linked = styled.div`
  text-decoration: none;
  color: #fff;
  font-family: inherit;
  padding: 1em 2rem;
  font-size: 13px;
  &:first-of-type {
    margin-top: 50px;
  }
`;
export const  CloseIcon = styled.div`
position: absolute;
top: 0;
right: 0;
cursor: pointer;
padding: 10px 35px 16px 0px;

& span,
& span:before,
& span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 3px;
  width: 30px;
  background: white;
  position: absolute;
  display: block;
  content: "";
}

& span {
  background-color: transparent;
}

& span:before {
  top: 0;
  transform: rotate(45deg);
}

& span:after {
  top: 0;
  transform: rotate(-45deg);
}
`;