export type ValidBinNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type Flashcard = {
id: number,
bin: ValidBinNumbers,
name: string,
description: string,
updatedAt: string,
createdAt: string,
correctGuesses: number,
incorrectGuesses: number,
nextAvailableTime: string,
};
