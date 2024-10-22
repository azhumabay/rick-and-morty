import APP_PATH from "../../const/router";
import { dimensionTranslate, typeTranslate } from "../../const/translator";
import {
  LocationImg,
  LocationInfo,
  LocationItemStyled,
} from "./Styles/locationItem.styled";
import locationPlaceholder from "@assets/images/locationPlaceholder.png";

export default function LocationItem({ id, name, type, dimension }) {
  const typeRus = typeTranslate[type];
  const dimensionRus = dimensionTranslate[dimension] || dimension;

  return (
    <LocationItemStyled to={`${APP_PATH.LOCATIONS}/${id}`}>
      <LocationImg src={locationPlaceholder} />
      <LocationInfo>
        <h2>{name}</h2>
        <div>
          {typeRus} <span>&#183; </span>
          {dimensionRus}
        </div>
      </LocationInfo>
    </LocationItemStyled>
  );
}
