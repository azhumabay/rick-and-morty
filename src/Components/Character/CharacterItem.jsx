import {
  CharacterImg,
  CharacterItemStyled,
  CharacterText,
} from "./Styles/CharacterItem.styled";

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

export default function CharacterItem({ character }) {
  const { image, name, species, gender, status } = character;

  const speciesRus = speciesTranslate[species] || "Неизвестная раса";
  const genderRus = genderTranslate[gender] || "Не указано";
  const statusRus = statusTranslate[status] || "Не указано";

  return (
    <CharacterItemStyled>
      <CharacterImg src={image} />
      <CharacterText $statuscolor={status}>
        <p>{statusRus}</p>
        <h2>{name}</h2>
        <span>
          {speciesRus}, {genderRus}
        </span>
      </CharacterText>
    </CharacterItemStyled>
  );
}
