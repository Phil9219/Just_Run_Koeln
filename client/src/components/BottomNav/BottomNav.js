import styled from "styled-components/macro";
import IconPlusBottomNav from "../../assets/bottomNavPlusIcon.svg";
import IconListBottomNav from "../../assets/bottomNavListIcon.svg";
import IconCheckHookBottomNav from "../../assets/bottomNavCheckHookIcon.svg";
import { Link } from "react-router-dom";

const BottomNav = styled.div`
  min-height: 80px;
  width: 100vw;
  /* position: fixed;
  bottom: 0; */
  left: 0;
  border-top: 2px solid var(--secondary-color);
  display: flex;
  justify-content: space-around;
  padding: 0 16px;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const DefaultButton = styled(Link)`
  display: flex;
  justify-items: space-around;
  background: none;
  height: 36px;
  width: 36px;
  padding: 0px;
  margin-top: 30px;
  border: none;
`;

const AddButton = styled(DefaultButton)`
  height: 100px;
  width: 100px;
  margin-top: -3px;
`;

const Navbar = () => {
  return (
    <BottomNav>
      <DefaultButton to="/runs done">
        <img src={IconCheckHookBottomNav} alt="Icon CheckHook" />
      </DefaultButton>
      <AddButton to="/setup run">
        <img src={IconPlusBottomNav} alt="Icon Plus" />
      </AddButton>
      <DefaultButton to="/choose your run">
        <img src={IconListBottomNav} alt="Icon List" />
      </DefaultButton>
    </BottomNav>
  );
};

export default Navbar;
