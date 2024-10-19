import {
  CharacterImg,
  CharacterItemStyled,
  CharacterText,
} from "./Styles/CharacterItem.styled";

export default function CharacterItem({ character }) {
  const { image, name, species, gender, status } = character;

  let speciesRus;
  switch (species) {
    case "Human":
      speciesRus = "Человек";
      break;
    case "Alien":
      speciesRus = "Инопланетянин";
      break;
    case "Humanoid ":
      speciesRus = "Гуманоид";
      break;
    case "Poopybutthole ":
      speciesRus = "ПопиБатхол";
      break;
    case "Mythological Creature":
      speciesRus = "Мифическое существо";
      break;
    case "Animal":
      speciesRus = "Животное";
      break;
    case "Robot":
      speciesRus = "Робот";
      break;
    case "Cronenberg":
      speciesRus = "Кронберг";
      break;
    case "Disease":
      speciesRus = "Болезнь";
      break;
    default:
      speciesRus = "Неизвестная раса";
  }

  let genderRus;
  switch (gender) {
    case "Male":
      genderRus = "Мужской";
      break;
    case "Female":
      genderRus = "Женский";
      break;
    case "Genderless":
      genderRus = "Без пола";
      break;

    case "Unknown":
      genderRus = "Неизвестно";
      break;
    default:
      genderRus = "Не указано";
  }

  let statusRus;
  switch (status) {
    case "Alive":
      statusRus = "Живой";
      break;
    case "Dead":
      statusRus = "Мертвый";
      break;
    case "unknown":
      statusRus = "Неизвестно";
      break;
    default:
      statusRus = "Не указано";
  }

  const statusColor =
    status === "Alive" ? "Alive" : status === "Dead" ? "Dead" : "info";

  return (
    <CharacterItemStyled>
      <CharacterImg src={image} />
      <CharacterText $statuscolor={statusColor}>
        <p>{statusRus}</p>
        <h2>{name}</h2>
        <span>
          {speciesRus}, {genderRus}
        </span>
      </CharacterText>
    </CharacterItemStyled>
  );
}
