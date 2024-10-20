import LocationItem from "./LocationItem";
import { LocationListStyled } from "./Styles/LocationList.styled";

export default function LocationList({ locationList }) {
  return (
    <LocationListStyled>
      {locationList.map(({ id, name, type, dimension }) => (
        <LocationItem
          key={id}
          id={id}
          name={name}
          type={type}
          dimension={dimension}
        />
      ))}
    </LocationListStyled>
  );
}
