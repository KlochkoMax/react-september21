import axios from "axios";

import mainUrl from "../url/url";

export const axiosServices=axios.create({baseURL:mainUrl});