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

const genderTranslate = {
  Male: "Мужской",
  Female: "Женский",
  Genderless: "Без пола",
  Unknown: "Неизвестно",
};

const speciesTranslate = {
  Human: "Человек",
  Alien: "Инопланетянин",
  Humanoid: "Гуманоид",
  Poopybutthole: "ПопиБатхол",
  "Mythological Creature": "Мифическое существо",
  Animal: "Животное",
  Robot: "Робот",
  Cronenberg: "Кронберг",
  Disease: "Болезнь",
};

const originTranslate = {
  unknown: "Неизвестно",
};

const locationTranslate = {
  unknown: "Неизвестно",
};

export default function CharacterPage() {
  const { response, fetchData } = useFetchStore();
  const { image, name, status, origin, location, gender, species } = response;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(characterService.getCharacter, id);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const statusRus = statusTranslate[status];
  const genderRus = genderTranslate[gender] || "Не указано";
  const speciesRus = speciesTranslate[species];
  const originRus = originTranslate[origin?.name] || origin?.name;
  const locationRus = locationTranslate[location?.name] || location?.name;

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
              <p>{genderRus}</p>
            </div>

            <div>
              <span>Расса</span>
              <p>{speciesRus}</p>
            </div>
          </CharacterInfo>

          <CharacterPlace>
            <div>
              <span>Место рождения</span>
              <p>{originRus}</p>
            </div>
            <RightArrow />
          </CharacterPlace>

          <CharacterPlace>
            <div>
              <span>Местоположение</span>
              <p>{locationRus}</p>
            </div>
            <RightArrow />
          </CharacterPlace>
        </CharacterInfoWrapper>
      </CharacterMain>
    </>
  );
}
