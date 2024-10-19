import CharacterItem from "./CharacterItem";
import { CharacterListStyled } from "./Styles/CharacterList.styled";

export default function CharacterList({ list }) {
  return (
    <>
      <CharacterListStyled>
        {list.map((item) => (
          <CharacterItem character={item} key={item.id} />
        ))}
      </CharacterListStyled>
    </>
  );
}
