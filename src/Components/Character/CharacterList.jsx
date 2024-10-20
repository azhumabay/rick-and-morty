import CharacterItem from "./CharacterItem";
import {
  CharacterLink,
  CharacterListStyled,
} from "./Styles/CharacterList.styled";
import APP_PATH from "../../const/router";

export default function CharacterList({ list }) {
  return (
    <>
      <CharacterListStyled>
        {list.map((item) => (
          <CharacterLink key={item.id} to={`${APP_PATH.CHARACTERS}/${item.id}`}>
            <CharacterItem character={item} />
          </CharacterLink>
        ))}
      </CharacterListStyled>
    </>
  );
}
