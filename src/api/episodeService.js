import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/episode";

const getEpisodeList = (page) => HTTP_CLIENT(`${ENDPOINT}/?page=${page}`);

const getEpisode = (id) => HTTP_CLIENT(`${ENDPOINT}/${id}`);

export default { getEpisodeList, getEpisode };
