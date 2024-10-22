import { HTTP_CLIENT } from "./core";

const ENDPOINT = "/location";

const getLocationList = (page) => HTTP_CLIENT(`${ENDPOINT}/?page=${page}`);
const getLocation = (id) => HTTP_CLIENT(`${ENDPOINT}/${id}`);

export default { getLocationList, getLocation };
