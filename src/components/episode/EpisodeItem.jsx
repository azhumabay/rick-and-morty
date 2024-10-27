import APP_PATH from "../../const/router";
import {
  EpisodeItemPng,
  EpisodeItemStyled,
  EpisodeItemText,
} from "./styled/EpisodeItem.styled";
import episodePlaceholder from "@assets/images/episodePlaceholder.png";

export default function EpisodeItem({ id, name, air, episode }) {
  return (
    <EpisodeItemStyled to={`${APP_PATH.EPISODES}/${id}`}>
      <EpisodeItemPng src={episodePlaceholder} />
      <EpisodeItemText>
        <p>{episode}</p>
        <h2>{name}</h2>
        <span>{air}</span>
      </EpisodeItemText>
    </EpisodeItemStyled>
  );
}
