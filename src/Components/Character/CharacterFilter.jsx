import {
  CharacterFilterContent,
  CharacterFilterDivider,
  CharacterFilterHeader,
  CharacterFilterItem,
  CharacterFilterStyled,
} from "./Styles/CharacterFilter.styled";

import { LeftArrow } from "../Icons";
import { useSearchStore } from "../../store";
import resetFilter from "@assets/images/resetFilter.svg";

const Checkbox = ({ id, label, onChange, name, checked }) => (
  <div>
    <input
      type="radio"
      name={name}
      id={id}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default function CharacterFilter({ setCurrentPage }) {
  const { closeFilter, setGender, setStatus, status, gender } =
    useSearchStore();

  const genderHandler = (event) => {
    setGender(event.target.id);
  };

  const statusHandler = (event) => {
    setStatus(event.target.id);
  };

  const resetHandler = () => {
    setStatus("");
    setGender("");
    setCurrentPage(1);
  };

  return (
    <>
      <CharacterFilterHeader>
        <div>
          <LeftArrow onClick={closeFilter} />
          <h1>Фильтры</h1>
        </div>
        {(status || gender) && (
          <img src={resetFilter} alt="очистить фильтр" onClick={resetHandler} />
        )}
      </CharacterFilterHeader>
      <CharacterFilterStyled>
        <span>Сортировать</span>

        <CharacterFilterContent>
          <CharacterFilterItem>
            <span>Статус</span>

            <Checkbox
              id="alive"
              label="Живой"
              name={"status"}
              onChange={statusHandler}
              checked={status === "alive"}
            />
            <Checkbox
              id="dead"
              label="Мертвый"
              name={"status"}
              onChange={statusHandler}
              checked={status === "dead"}
            />
            <Checkbox
              id="unknown"
              label="Неизвестно"
              name={"status"}
              onChange={statusHandler}
              checked={status === "unknown"}
            />
          </CharacterFilterItem>

          <CharacterFilterDivider />

          <CharacterFilterItem>
            <span>Пол</span>

            <Checkbox
              id="male"
              label="Мужской"
              name={"gender"}
              onChange={genderHandler}
              checked={gender === "male"}
            />
            <Checkbox
              id="female"
              label="Женский"
              name={"gender"}
              onChange={genderHandler}
              checked={gender === "female"}
            />
            <Checkbox
              id="genderless"
              label="Бесполый"
              name={"gender"}
              onChange={genderHandler}
              checked={gender === "genderless"}
            />
          </CharacterFilterItem>
        </CharacterFilterContent>
      </CharacterFilterStyled>
    </>
  );
}
