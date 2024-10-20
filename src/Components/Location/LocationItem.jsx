import APP_PATH from "../../const/router";
import {
  LocationImg,
  LocationInfo,
  LocationItemStyled,
} from "./Styles/locationItem.styled";
import locationPlaceholder from "@assets/images/locationPlaceholder.png";

const typeTranslate = {
  Planet: "Планета",
  "Space station": "Космическая станция",
  Microverse: "Микроверс",
  Cluster: "Кластер",
  Dimension: "Измерение",
  TV: "Телевидение",
  Resort: "Курорт",
  Dream: "Сон",
  "Fantasy town": "Фэнтезийный город",
};

const dimensionTranslate = {
  unknown: "Неизвестно",
};

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
