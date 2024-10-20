import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/location";

const getLocationList = () => HTTP_CLIENT(ENDPOINT);
const getLocation = (id) => HTTP_CLIENT(`${ENDPOINT}/${id}`);

export default { getLocationList, getLocation };
