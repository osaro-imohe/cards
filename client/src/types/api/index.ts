import { Flashcard } from '../shared';

export type GetFlashCardsResponse = {
flashCards: Flashcard[];
};

export type CreateFlashCardsResponse = {
flashCard: Flashcard;
};

export type UpdateFlashCardsResponse = {
flashCard: Flashcard;
}
