/* eslint-disable class-methods-use-this */
import { Flashcard, sequelize, Sqlz } from '../../model';

class FlashcardHelper {
  async createFlashCard(name: string, description: string) {
    const flashCard = await Flashcard.create({
      name,
      bin: 0,
      description,
      correctGuesses: 0,
      incorrectGuesses: 0,
      nextAvailableTime: new Date(),
    });
    return flashCard;
  }

  async getFlashCards() {
    const flashCards = await Flashcard.findAll();
    return flashCards;
  }

  async getValidFlashCards() {
    const flashCards = await Flashcard.findAll({
      where: {
        nextAvailableTime: {
          [Sqlz.Op.lte]: new Date(),
        },
      },
    });
    return flashCards;
  }

  async getFlashCardsByBin(bin: number) {
    const flashCards = await Flashcard.findAll({
      where: {
        bin,
      },
    });
    return flashCards;
  }

  async getFlashCardDetails(id: number) {
    const flashCard = await Flashcard.findOne({
      where: {
        id,
      },
    });
    return flashCard;
  }

  async updateFlashCard(id: number, values: {[key: string]: string | number}) {
    const flashCard = await Flashcard.findOne({
      where: { id },
    });

    if (!values || !flashCard || Object.keys(values).length === 0) return flashCard;

    const updateCard = async (key: string, value: string | number) => {
      flashCard[key] = value;
      await flashCard.save();
    };

    Object.keys(values).forEach((key) => updateCard(key, values[key]));
    return flashCard;
  }
}

export default new FlashcardHelper();
