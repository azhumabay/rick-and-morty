import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APP_PATH from "../../const/router";
import {
  SplashScreenMorty,
  SplashScreenRick,
  SplashScreenStyled,
  SplashScreenTitle,
} from "./SplashScreen.styled";
import splashTitle from "@assets/images/splashScreenTitle.png";
import splashMorty from "@assets/images/splashScreenMorty.svg";
import splashRick from "@assets/images/splashScreenRick.svg";

export default function SplashScreen() {
  const navgiate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navgiate(APP_PATH.CHARACTERS);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [navgiate]);

  return (
    <SplashScreenStyled>
      <SplashScreenTitle src={splashTitle} />
      <SplashScreenMorty src={splashMorty} />
      <SplashScreenRick src={splashRick} />
    </SplashScreenStyled>
  );
}
