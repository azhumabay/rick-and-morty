import { useNavigate } from "react-router-dom";
import {
  LeftArrow,
  SettingsHeader,
  ThemeWrapper,
  Theme,
  ThemeText,
} from "./Settings.styled";
import leftArrow from "@assets/images/leftArrow.svg";
import { RightArrow, ThemeIcon } from "../../Components/Icons";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

export default function SettingsPage() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <SettingsHeader>
        <LeftArrow src={leftArrow} onClick={goBack} />
        <h2>Настройки</h2>
      </SettingsHeader>

      {modal && <SettingsModal toggleModal={toggleModal} />}

      <ThemeWrapper onClick={toggleModal}>
        <span>ВНЕШНИЙ ВИД</span>
        <Theme>
          <ThemeIcon color="white" />
          <ThemeText>
            Темная тема <span>Включена</span>
          </ThemeText>
          <RightArrow />
        </Theme>
      </ThemeWrapper>
    </>
  );
}
