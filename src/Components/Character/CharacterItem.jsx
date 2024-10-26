import {
  genderTranslate,
  speciesTranslate,
  statusTranslate,
} from "../../const/translator";
import {
  CharacterGridImg,
  CharacterGridStyled,
  CharacterGridText,
} from "./styled/CharacterGridItem.styled";
import {
  CharacterTableImg,
  CharacterItemTable,
  CharacterTableText,
} from "./styled/CharacterTableItem.styled";

export default function CharacterItem({ character, gridView }) {
  const { image, name, species, gender, status } = character;

  const speciesRus = speciesTranslate[species] || "Неизвестная раса";
  const genderRus = genderTranslate[gender] || "Не указано";
  const statusRus = statusTranslate[status] || "Не указано";

  return gridView ? (
    <CharacterGridStyled>
      <CharacterGridImg src={image} />
      <CharacterGridText $statuscolor={status}>
        <p>{statusRus}</p>
        <h2>{name}</h2>
        <span>
          {speciesRus}, {genderRus}
        </span>
      </CharacterGridText>
    </CharacterGridStyled>
  ) : (
    <CharacterItemTable>
      <CharacterTableImg src={image} />
      <CharacterTableText $statuscolor={status}>
        <p>{statusRus}</p>
        <h2>{name}</h2>
        <span>
          {speciesRus}, {genderRus}
        </span>
      </CharacterTableText>
    </CharacterItemTable>
  );
}
