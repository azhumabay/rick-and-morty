import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  EpisodeCharacters,
  EpisodeDivider,
  EpisodePageClose,
  EpisodePageImg,
  EpisodePageInfo,
  EpisodePageMain,
  EpisodePageTitle,
} from "./styled/EpisodeStyled.styled";

import episodePagePlaceholder from "@assets/images/episodePagePlaceholder.png";
import leftArrow from "@assets/images/leftArrow.svg";
import { CharacterList } from "../../components";
import { useCharacterStore, useEpisodeStore } from "../../store";

export default function EpisodePage() {
  const { fetchCharacter } = useCharacterStore();
  const { fetchEpisode, episode, resetEpisode } = useEpisodeStore();

  const [characterList, setCharacterList] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchEpisode(id);

    return () => {
      resetEpisode();
    };
  }, [id, fetchEpisode, resetEpisode]);

  useEffect(() => {
    if (episode && episode.characters?.length > 0) {
      const fetchCharacters = async () => {
        const characterListData = await fetchCharacter(
          episode.characters.map((character) => character.split("/").pop())
        );
        setCharacterList(characterListData);
      };

      fetchCharacters();
    }
  }, [episode, fetchCharacter]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <EpisodePageImg src={episodePagePlaceholder} />
      <EpisodePageClose src={leftArrow} onClick={goBack} />

      <EpisodePageMain>
        <EpisodePageTitle>
          <h1>{episode?.name}</h1>
          <span>{episode?.episode}</span>
        </EpisodePageTitle>

        <EpisodePageInfo>
          <span>Премьера</span>
          <p>{episode?.air_date}</p>
        </EpisodePageInfo>

        <EpisodeDivider />

        <EpisodeCharacters>
          <h2>Персонажи</h2>
          <CharacterList list={characterList} />
        </EpisodeCharacters>
      </EpisodePageMain>
    </>
  );
}
