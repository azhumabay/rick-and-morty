import {
  CharacterFilterContent,
  CharacterFilterDivider,
  CharacterFilterHeader,
  CharacterFilterItem,
  CharacterFilterStyled,
} from "./Styles/CharacterFilter.styled";

import { LeftArrow } from "../Icons";
import { useSearchStore } from "../../store";

const Checkbox = ({ id, label, onChange, name }) => (
  <div>
    <input type="radio" name={name} id={id} onChange={onChange} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default function CharacterFilter() {
  const { closeFilter } = useSearchStore();

  return (
    <>
      <CharacterFilterHeader>
        <LeftArrow onClick={closeFilter} />
        <h1>Фильтры</h1>
      </CharacterFilterHeader>
      <CharacterFilterStyled>
        <span>Сортировать</span>

        <CharacterFilterContent>
          <CharacterFilterItem>
            <span>Статус</span>

            <Checkbox id="status=alive" label="Живой" name={"status"} />
            <Checkbox id="status=dead" label="Мертвый" name={"status"} />
            <Checkbox id="status=unknown" label="Неизвестно" name={"status"} />
          </CharacterFilterItem>

          <CharacterFilterDivider />

          <CharacterFilterItem>
            <span>Пол</span>

            <Checkbox id="gender-male" label="Мужской" name={"gender"} />
            <Checkbox id="gender-female" label="Женский" name={"gender"} />
            <Checkbox id="gender-genderless" label="Бесполый" name={"gender"} />
          </CharacterFilterItem>
        </CharacterFilterContent>
      </CharacterFilterStyled>
    </>
  );
}
