import styled from "styled-components";

interface IVisibilityProps {
  visible: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: groove;
  background-color: ghostwhite;

  header {
    width: 100%;
    
    div {
      display: flex;
      width: 100%;
      justify-content: space-around;

      span {
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: row;
      }
    }
  }
`;

export const Icon = styled.i`
  color: #b9b8b8;

  &.fa-crown {
    &.active {
      color: gold;
    }
  }

  &.fa-fire {
    &.active {
      color: orangered;
    }
  }

  &.fa-gem {
    &.active {
      color: red;
    }
  }
`;

export const Arrow = styled.div`
  visibility: ${(p: IVisibilityProps) => p.visible ? "visible" : "hidden"};
  opacity: ${(p: IVisibilityProps) => p.visible ? "1" : "0"};
  bottom: -15px;
  height: 10px;
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  
  &::after {
    background-color: #fff;
    border: 2px solid #e5e5e5;
    border-radius: 2px;
    box-sizing: border-box;
    content: "";
    height: 30px;
    left: 50%;
    position: absolute;
    transform: rotate(45deg);
    transform-origin: top left;
    width: 30px;
  }
`;
  
export const Menu = styled.div`
  visibility: ${(p: IVisibilityProps) => p.visible ? "visible" : "hidden"};
  opacity: ${(p: IVisibilityProps) => p.visible ? "1" : "0"};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 50px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  
  transition: visibility 0s, opacity 0.5s ease-in;

  .menu__options {
    background-color: ghostwhite;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
    
    .menu__options_container {
      flex-direction: column;
      
      .option {
        align-items: center;
        border-bottom: 2px solid #e5e5e5;
        padding: 10px;
        display: flex;
        width: 100%;
      }
    } 
  }
`;

export const Backdrop = styled.div`
  height: 100%;
  box-sizing: inherit;
  font-family: din-round,sans-serif;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #afafafbb;
  font-size: 17px;
`;
