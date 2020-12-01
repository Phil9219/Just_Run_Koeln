import styled from "styled-components/macro";
import IconPlusBottomNav from "../../assets/bottomNavPlusIcon.svg";
import IconListBottomNav from "../../assets/bottomNavListIcon.svg";
import IconCheckHookBottomNav from "../../assets/bottomNavCheckHookIcon.svg";

const BottomNav = styled.div`
  min-height: 80px;
  width: 100vw;
  position: fixed;
  bottom: 0;
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

const defaultButton = styled.button`
  background: none;
  height: 24px;
  width: 24px;
  padding: 0px;
`;

const addButton = styled(defaultButton)`
  height: 36px;
  width: 36px;
`;

const Navbar = () => {
  return (
    <BottomNav>
      <defaultButton>
        <img src={IconCheckHookBottomNav} alt="Icon CheckHook" />
      </defaultButton>
      <addButton>
        <img src={IconPlusBottomNav} alt="Icon Plus" />
      </addButton>
      <defaultButton>
        <img src={IconListBottomNav} alt="Icon List" />
      </defaultButton>
    </BottomNav>
  );
};

export default Navbar;
