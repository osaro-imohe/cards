import { ValidBinNumbers } from "../types/shared";
import { BinToTimeMapInSecs } from "../utils";

// eslint-disable-next-line max-len
export const selectRandomElementInArray = (array: any[]) => array[Math.floor(Math.random() * array.length)];
// eslint-disable-next-line no-promise-executor-return
export const delay = (numSecs: number) => new Promise((res) => setTimeout(res, numSecs * 1000));

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getNextAvailableTime = (bin: ValidBinNumbers) => BinToTimeMapInSecs.get(bin) ?? 0;
