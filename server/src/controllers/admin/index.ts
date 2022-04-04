/* eslint-disable class-methods-use-this */
import { Response } from 'express';
import helpers from '../../helpers';

export class AdminController {
  async createFlashCard(
    request: any,
    response: Response,
  ): Promise<any> {
    try {
      const { bin, name, description } = request.body;
      if (!name || !description) {
        return response.status(400).send({ error: 'Incomplete details' });
      }
      const flashCard = await helpers.flashCards.createFlashCard(name, description);
      return response.status(200).send({ flashCard });
    } catch (e) {
      return response.status(400).send({ error: 'Could not create new flashcard' });
    }
  }

  async getValidFlashCards(
    request: any,
    response: Response,
  ): Promise<any> {
    try {
      const flashCards = await helpers.flashCards.getValidFlashCards();
      return response.status(200).send({ flashCards });
    } catch (e) {
      return response.status(400).send({ error: 'Could not retrieve flashcards' });
    }
  }

  async getFlashCards(
    request: any,
    response: Response,
  ): Promise<any> {
    try {
      const flashCards = await helpers.flashCards.getFlashCards();
      return response.status(200).send({ flashCards });
    } catch (e) {
      return response.status(400).send({ error: 'Could not retrieve flashcards' });
    }
  }

  async updateFlashCard(
    request: any,
    response: Response,
  ): Promise<any> {
    try {
      const { id, values } = request.body;
      if (!id || !values || !Object.keys(values).length) {
        return response.status(400).send({ error: 'Incomplete details' });
      }
      console.log(values);
      const flashCard = await helpers.flashCards.updateFlashCard(id, values);
      if (!flashCard) return response.status(400).send({ error: 'Could not find flashcard' });
      return response.status(200).send({ flashCard });
    } catch (e) {
      console.log(e);
      return response.status(400).send({ error: 'Could not update flashcards' });
    }
  }
}
