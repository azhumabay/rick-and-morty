import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/character";

const getCharacterList = (page) => HTTP_CLIENT(`${ENDPOINT}/?page=${page}`);

const getCharacter = (id) => HTTP_CLIENT(`${ENDPOINT}/${id}`);

const getFilteredCharacterList = (params) => HTTP_CLIENT(ENDPOINT + params);

export default { getCharacterList, getCharacter, getFilteredCharacterList };
