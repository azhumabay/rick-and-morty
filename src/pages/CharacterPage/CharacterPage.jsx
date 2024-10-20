import { useEffect } from "react";
import { useFetchStore } from "../../store";
import { characterService } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { LeftArrow, RightArrow } from "../../Components/Icons";

import {
  CharacterBack,
  CharacterPlace,
  CharacterHeader,
  CharacterHeaderBlur,
  CharacterHeaderWrapper,
  CharacterImg,
  CharacterInfo,
  CharacterInfoWrapper,
  CharacterMain,
  CharacterTitle,
} from "./Styles/CharacterPage.styled";

const statusTranslate = {
  Alive: "ЖИВОЙ",
  Dead: "МЕРТВЫЙ",
  unknown: "НЕИЗВЕСТНО",
};

export default function CharacterPage() {
  const { response, fetchData } = useFetchStore();
  const { image, name, status, origin, location } = response;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(characterService.getCharacter, id);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const statusRus = statusTranslate[status];

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

        <CharacterInfoWrapper>
          <CharacterInfo>
            <div>
              <span>Пол</span>
              <p>Мужской</p>
            </div>

            <div>
              <span>Расса</span>
              <p>Человек</p>
            </div>
          </CharacterInfo>

          <CharacterPlace>
            <div>
              <span>Место рождения</span>
              <p>{origin?.name}</p>
            </div>
            <RightArrow />
          </CharacterPlace>

          <CharacterPlace>
            <div>
              <span>Местоположение</span>
              <p>{location?.name}</p>
            </div>
            <RightArrow />
          </CharacterPlace>
        </CharacterInfoWrapper>
      </CharacterMain>
    </>
  );
}
