import { useEffect } from "react";
import { useFetchStore } from "../../../store";
import { characterService } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import { RightArrow } from "../../../Components/Icons";
import APP_PATH from "../../../const/router";

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
  CharacterDivider,
  CharacterPageStyled,
  CharacterEpisodes,
  CharacterEpisodesInfo,
} from "./CharacterPage.styled";

import leftArrow from "@assets/images/leftArrow.svg";
import {
  genderTranslate,
  locationTranslate,
  originTranslate,
  speciesTranslate,
  statusTranslate,
} from "../../../const/translator";

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

  const originId = origin?.url.split("/").pop();
  const locationId = location?.url.split("/").pop();

  return (
    <CharacterPageStyled>
      <CharacterHeaderWrapper>
        <CharacterBack onClick={goBack}>
          <img src={leftArrow} />
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

          <CharacterPlace to={`${APP_PATH.LOCATIONS}/${originId}`}>
            <div>
              <span>Место рождения</span>
              <p>{originRus}</p>
            </div>
            <RightArrow />
          </CharacterPlace>

          <CharacterPlace to={`${APP_PATH.LOCATIONS}/${locationId}`}>
            <div>
              <span>Местоположение</span>
              <p>{locationRus}</p>
            </div>
            <RightArrow />
          </CharacterPlace>
        </CharacterInfoWrapper>
      </CharacterMain>

      <CharacterDivider />

      <CharacterEpisodes>
        <CharacterEpisodesInfo>
          <h2>Эпизоды</h2>
          <span>Все эпизоды</span>
        </CharacterEpisodesInfo>
      </CharacterEpisodes>
    </CharacterPageStyled>
  );
}
