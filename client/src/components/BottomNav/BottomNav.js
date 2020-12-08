import styled from "styled-components/macro";
import IconPlusBottomNav from "../../assets/bottomNavPlusIcon.svg";
import IconListBottomNav from "../../assets/bottomNavListIcon.svg";
import IconCheckHookBottomNav from "../../assets/bottomNavCheckHookIcon.svg";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  min-height: 70px;
  max-height: 70px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid var(--secondary-color);
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
  background-color: var(--primary-color);

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
  margin-top: 14px;
  border: none;
`;

const AddButton = styled(DefaultButton)`
  height: 80px;
  width: 80px;
  margin-top: -7px;
`;

const Navbar = () => {
  return (
    <Footer>
      <DefaultButton to="/runs_done">
        <img src={IconCheckHookBottomNav} alt="Icon CheckHook" />
      </DefaultButton>
      <AddButton to="/setup_run">
        <img src={IconPlusBottomNav} alt="Icon Plus" />
      </AddButton>
      <DefaultButton to="/choose_your_run">
        <img src={IconListBottomNav} alt="Icon List" />
      </DefaultButton>
    </Footer>
  );
};

export default Navbar;
