import { useEffect, useState } from "react";
import useFetchStore from "../../../store/useFetchStore";
import episodeService from "../../../api/episodeService";
import { useNavigate, useParams } from "react-router-dom";
import characterService from "../../../api/characterService";
import {
  EpisodeCharacters,
  EpisodeDivider,
  EpisodePageClose,
  EpisodePageImg,
  EpisodePageInfo,
  EpisodePageMain,
  EpisodePageTitle,
} from "./EpisodeStyled.styled";

import episodePagePlaceholder from "@assets/images/episodePagePlaceholder.png";
import leftArrow from "@assets/images/leftArrow.svg";
import { CharacterList } from "../../../Components";

export default function EpisodePage() {
  const { fetchData } = useFetchStore();
  const [episode, setEpisode] = useState(null);
  const [characterList, setCharacterList] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchEpisode = async () => {
      const episodeData = await fetchData(episodeService.getEpisode, id);
      setEpisode(episodeData);
    };

    fetchEpisode();
  }, []);

  useEffect(() => {
    if (episode && episode.characters.length > 0) {
      const fetchCharacters = async () => {
        const characterListData = await fetchData(
          characterService.getCharacter,
          episode.characters.map((character) => {
            return character.split("/").pop();
          })
        );

        setCharacterList(characterListData);
      };

      fetchCharacters();
    }
  }, [episode]);

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
