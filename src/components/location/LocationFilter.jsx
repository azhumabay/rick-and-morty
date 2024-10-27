import {
  LocationFilterContent,
  LocationFilterDivider,
  LocationFilterHeader,
  LocationFilterSection,
  LocationListWrapper,
} from "./styled/LocationFilter.styled";
import { LeftArrow, RightArrow } from "../Icons";
import useLocationStore from "../../store/useLocationStore";
import { useState } from "react";
import { typeTranslate } from "../../const/translator";
import resetFilter from "@assets/images/resetFilter.svg";

export default function LocationFilter() {
  const { closeFilter, type, dimension, setType } = useLocationStore();
  const [isType, setIsType] = useState(false);

  const openIsType = () => {
    setIsType(true);
  };

  const closeHandler = () => {
    {
      isType ? setIsType(false) : closeFilter();
    }
  };

  const setTypeHandler = (key) => {
    setType(key);
  };

  const resetFilterHandler = () => {
    setType(null);
  };

  return (
    <>
      <LocationFilterHeader>
        <div>
          <LeftArrow onClick={closeHandler} />
          <h1>{isType ? "Выберите тип" : "Фильтры"}</h1>
        </div>

        {(type || dimension) && (
          <img
            src={resetFilter}
            alt="Обновить фильтр"
            onClick={resetFilterHandler}
          />
        )}
      </LocationFilterHeader>

      <LocationFilterContent>
        {!isType && (
          <>
            <span>Фильтровать по: </span>

            <LocationFilterSection onClick={openIsType}>
              <div>
                <h2>{type ? typeTranslate[type] : "Тип"}</h2>
                <p>Выберите тип локации</p>
              </div>
              <RightArrow />
            </LocationFilterSection>
          </>
        )}

        {isType && (
          <LocationListWrapper>
            <p>{type !== null ? typeTranslate[type] : "Не выбрано"}</p>

            <LocationFilterDivider />

            {Object.entries(typeTranslate).map(([key, value]) => (
              <p
                key={key}
                onClick={() => setTypeHandler(key)}
                className={type === key ? "active" : ""}
              >
                {value}
              </p>
            ))}
          </LocationListWrapper>
        )}
      </LocationFilterContent>
    </>
  );
}
