import EpisodeItem from "./EpisodeItem";
import { EpisodeListStyled } from "./styled/EpisodeList.styled";

export default function EpisodeList({ list }) {
  return (
    <EpisodeListStyled>
      {list.map(({ id, name, air_date, episode }) => (
        <EpisodeItem
          key={id}
          id={id}
          name={name}
          air={air_date}
          episode={episode}
        />
      ))}
    </EpisodeListStyled>
  );
}
