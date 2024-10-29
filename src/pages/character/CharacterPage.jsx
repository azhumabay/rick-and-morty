import { useEffect, useState } from "react";
import { useCharacterStore, useEpisodeStore } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { RightArrow } from "../../components/Icons";
import APP_PATH from "../../const/router";
import Skeleton from "react-loading-skeleton";

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
} from "./styled/CharacterPage.styled";

import leftArrow from "@assets/images/leftArrow.svg";
import {
  genderTranslate,
  locationTranslate,
  originTranslate,
  speciesTranslate,
  statusTranslate,
} from "../../const/translator";
import { EpisodeList } from "../../components";

export default function CharacterPage() {
  const { character, fetchCharacter, resetCharacter, loading } =
    useCharacterStore();
  const { fetchEpisode, resetEpisode } = useEpisodeStore();
  const { image, name, status, origin, location, gender, species } = character;
  const [characterEpisodes, setCharacterEpisodes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacter(id);
    window.scrollTo(window.scrollX, 0);

    return () => {
      resetCharacter();
      resetEpisode();
    };
  }, []);

  useEffect(() => {
    if (character?.episode?.length > 0) {
      const fetchEpisodes = async () => {
        const episodeIds = character.episode.map((url) => url.split("/").pop());

        const charactersData = await fetchEpisode(episodeIds);
        setCharacterEpisodes(
          Array.isArray(charactersData) ? charactersData : [charactersData]
        );
      };

      fetchEpisodes();
    }
  }, [character]);

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

        {loading ? (
          <Skeleton height={218} width="100%" />
        ) : (
          <CharacterHeader src={image} />
        )}
        <CharacterHeaderBlur />

        {loading ? (
          <Skeleton
            circle={true}
            height={146}
            width={146}
            style={{
              position: "absolute",
              top: "calc(218px - 73px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
            }}
          />
        ) : (
          <CharacterImg src={image} />
        )}
      </CharacterHeaderWrapper>

      <CharacterMain>
        <CharacterTitle $statuscolor={status}>
          <h1>{loading ? <Skeleton width={100} /> : name}</h1>
          <span>{loading ? <Skeleton width={60} /> : statusRus}</span>
        </CharacterTitle>

        <CharacterInfoWrapper>
          <CharacterInfo>
            <div>
              <span>Пол</span>
              <p>{loading ? <Skeleton width={80} /> : genderRus}</p>
            </div>

            <div>
              <span>Расса</span>
              <p>{loading ? <Skeleton width={80} /> : speciesRus}</p>
            </div>
          </CharacterInfo>

          <CharacterPlace to={`${APP_PATH.LOCATIONS}/${originId}`}>
            <div>
              <span>Место рождения</span>
              <p>{loading ? <Skeleton width={120} /> : originRus}</p>
            </div>
            <RightArrow />
          </CharacterPlace>

          <CharacterPlace to={`${APP_PATH.LOCATIONS}/${locationId}`}>
            <div>
              <span>Местоположение</span>
              <p>{loading ? <Skeleton width={120} /> : locationRus}</p>
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

        {characterEpisodes.length > 0 ? (
          <EpisodeList list={characterEpisodes} />
        ) : (
          <Skeleton count={1} height={30} />
        )}
      </CharacterEpisodes>
    </CharacterPageStyled>
  );
}
