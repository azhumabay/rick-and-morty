import {
  CharacterGridImg,
  CharacterGridStyled,
  CharacterGridText,
} from "./Styles/CharacterGridItem.styled";
import {
  CharacterTableImg,
  CharacterItemTable,
  CharacterTableText,
} from "./Styles/CharacterTableItem.styled";

const speciesTranslate = {
  Human: "Человек",
  Alien: "Инопланетянин",
  Humanoid: "Гуманоид",
  Poopybutthole: "ПопиБатхол",
  "Mythological Creature": "Мифическое существо",
  Animal: "Животное",
  Robot: "Робот",
  Cronenberg: "Кронберг",
  Disease: "Болезнь",
};

const genderTranslate = {
  Male: "Мужской",
  Female: "Женский",
  Genderless: "Без пола",
  Unknown: "Неизвестно",
};

const statusTranslate = {
  Alive: "ЖИВОЙ",
  Dead: "МЕРТВЫЙ",
  unknown: "Неизвестно",
};

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
