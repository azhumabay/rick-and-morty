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
import Skeleton from "react-loading-skeleton";

export default function EpisodePage() {
  const { fetchCharacter } = useCharacterStore();
  const { fetchEpisode, loading, episode, resetEpisode } = useEpisodeStore();

  const [characterList, setCharacterList] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchEpisode(id);
    window.scrollTo(window.scrollX, 0);

    return () => {
      resetEpisode();
    };
  }, [id, fetchEpisode, resetEpisode]);

  useEffect(() => {
    if (episode?.characters?.length > 0) {
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
      {loading ? (
        <Skeleton
          width="100%"
          height={298}
          style={{ position: "absolute", left: "0" }}
        />
      ) : (
        <EpisodePageImg src={episodePagePlaceholder} />
      )}

      <EpisodePageClose src={leftArrow} onClick={goBack} />

      <EpisodePageMain>
        <EpisodePageTitle>
          <h1>{episode?.name || <Skeleton width={180} height={32} />}</h1>
          <span>{episode?.episode || <Skeleton width={90} height={16} />}</span>
        </EpisodePageTitle>

        <EpisodePageInfo>
          <span>Премьера</span>
          <p>{episode?.air_date || <Skeleton width={104} height={18} />}</p>
        </EpisodePageInfo>

        <EpisodeDivider />

        <EpisodeCharacters>
          <h2>Персонажи</h2>
          {!characterList.length > 0 ? (
            <Skeleton height={54} />
          ) : (
            <CharacterList list={characterList} />
          )}
        </EpisodeCharacters>
      </EpisodePageMain>
    </>
  );
}
