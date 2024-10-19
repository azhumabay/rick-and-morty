import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/character";

const getCharacterList = () => HTTP_CLIENT(ENDPOINT);

export default { getCharacterList };
