import { ValidBinNumbers } from "../types/shared";

const URLS = new Map([['development', 'localhost:8080'], ['production', '']]);

export const BASE_URL = URLS.get(process.env.REACT_APP_ENVIRONMENT ?? 'development');

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const BinToTimeMapInSecs = new Map<ValidBinNumbers, number>([[0, 0], [1, 5], [2, 25], [3, 120], [4, 600], [5, 3600], [6, 18000], [7, 86400], [8, 432000], [9, 2160000], [10, 10520000], [11, -1]]);