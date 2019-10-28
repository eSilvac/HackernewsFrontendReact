import axios from "axios";
import Cookies from 'js-cookie';

import Api from "./api";

const getUser = () => {
  Api.get("/user");
};

export default getUser;
