import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/character";

const getCharacterList = () => HTTP_CLIENT(ENDPOINT);

const getCharacter = (id) => HTTP_CLIENT(`${ENDPOINT}/${id}`);

export default { getCharacterList, getCharacter };
