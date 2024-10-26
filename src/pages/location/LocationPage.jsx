import { useEffect, useState } from "react";
import { useFetchStore } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { characterService, locationService } from "../../api";
import { dimensionTranslate, typeTranslate } from "../../const/translator";
import {
  LocationBack,
  LocationImg,
  LocationMain,
  LocationResidents,
  LocationTitle,
} from "./styled/LocationPage.styled";
import { CharacterList } from "../../components";

import locationPlaceholder from "@assets/images/locationPlaceholder.png";
import leftArrow from "@assets/images/leftArrow.svg";

export default function LocationPage() {
  const { fetchData } = useFetchStore();

  const [location, setLocation] = useState(null);
  const [characterList, setCharacterList] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocation = async () => {
      const locationData = await fetchData(locationService.getLocation, id);
      setLocation(locationData);
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (location && location.residents.length > 0) {
      const fetchCharacters = async () => {
        const characterIds = location.residents.map((url) =>
          url.split("/").pop()
        );

        const charactersData = await fetchData(
          characterService.getCharacter,
          characterIds.join(",")
        );
        setCharacterList(
          Array.isArray(charactersData) ? charactersData : [charactersData]
        );
      };

      fetchCharacters();
    }
  }, [location]);

  const goBack = () => {
    navigate(-1);
  };

  const typeRus = typeTranslate[location?.type];
  const dimensionRus =
    dimensionTranslate[location?.dimension] || location?.dimension;

  return (
    <>
      <LocationImg src={locationPlaceholder} />
      <LocationBack onClick={goBack} src={leftArrow} />
      <LocationMain>
        <LocationTitle>
          <h2>{location?.name}</h2>
          <div>
            {typeRus} <span>&#183; </span>
            {dimensionRus}
          </div>
        </LocationTitle>

        {characterList && characterList.length > 0 && (
          <LocationResidents>
            <h2>Персонажи</h2>
            <CharacterList list={characterList} />
          </LocationResidents>
        )}
      </LocationMain>
    </>
  );
}
