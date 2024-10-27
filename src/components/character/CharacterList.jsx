import CharacterItem from "./CharacterItem";
import {
  CharacterLink,
  CharacterListStyled,
} from "./styled/CharacterList.styled";
import APP_PATH from "../../const/router";

export default function CharacterList({ list, gridView }) {
  return (
    <>
      <CharacterListStyled $isGridView={gridView}>
        {list.map((item) => (
          <CharacterLink key={item.id} to={`${APP_PATH.CHARACTERS}/${item.id}`}>
            <CharacterItem character={item} gridView={gridView} />
          </CharacterLink>
        ))}
      </CharacterListStyled>
    </>
  );
}
