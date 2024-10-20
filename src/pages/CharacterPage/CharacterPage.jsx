import { useEffect } from "react";
import { useFetchStore } from "../../store";
import { characterService } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { LeftArrow } from "../../Components/Icons";

import {
  CharacterBack,
  CharacterHeader,
  CharacterHeaderBlur,
  CharacterHeaderWrapper,
  CharacterImg,
  CharacterMain,
  CharacterTitle,
} from "./Styles/CharacterPage.styled";

export default function CharacterPage() {
  const { response, fetchData } = useFetchStore();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(characterService.getCharacter, id);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const { image, name, status } = response;

  const statusMap = {
    Alive: "Живой",
    Dead: "Мертвый",
    unknown: "Неизвестно",
  };

  const statusRus = statusMap[status];

  return (
    <>
      <CharacterHeaderWrapper>
        <CharacterBack onClick={goBack}>
          <LeftArrow />
        </CharacterBack>

        <CharacterHeader src={image} />
        <CharacterHeaderBlur />

        <CharacterImg src={image} />
      </CharacterHeaderWrapper>

      <CharacterMain>
        <CharacterTitle $statuscolor={status}>
          <h1>{name}</h1>
          <span>{statusRus}</span>
        </CharacterTitle>
      </CharacterMain>
    </>
  );
}
