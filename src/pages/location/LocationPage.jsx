import { useEffect, useState } from "react";
import { useCharacterStore } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
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
import useLocationStore from "../../store/useLocationStore";
import Skeleton from "react-loading-skeleton";

export default function LocationPage() {
  const { fetchCharacter, loading: characterLoading } = useCharacterStore();
  const { location, fetchLocation, resetLocation, loading } =
    useLocationStore();
  const [characterList, setCharacterList] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocation(id);

    return () => {
      resetLocation();
    };
  }, []);

  useEffect(() => {
    if (location?.residents?.length > 0) {
      const fetchCharacters = async () => {
        const characterIds = location.residents.map((url) =>
          url.split("/").pop()
        );

        const charactersData = await fetchCharacter(characterIds);

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
      {loading ? (
        <Skeleton
          height={298}
          width="100%"
          style={{ position: "absolute", left: 0 }}
        />
      ) : (
        <LocationImg src={locationPlaceholder} />
      )}
      <LocationBack onClick={goBack} src={leftArrow} />
      <LocationMain>
        <LocationTitle>
          <h2>{location.name || <Skeleton height={32} width={180} />}</h2>
          <div>
            {loading ? (
              <>
                <Skeleton width={26} height={16} />
                <span>&#183;</span>
                <Skeleton width={105} height={16} />
              </>
            ) : (
              <>
                {typeRus} <span>&#183;</span> {dimensionRus}
              </>
            )}
          </div>
        </LocationTitle>

        <LocationResidents>
          {characterList?.length > 0 && <h2>Персонажи</h2>}
          {characterLoading ? (
            <Skeleton width="100%" height={74} />
          ) : (
            <>
              {characterList && characterList.length > 0 && (
                <CharacterList list={characterList} />
              )}
            </>
          )}
        </LocationResidents>
      </LocationMain>
    </>
  );
}
