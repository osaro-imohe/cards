/* eslint-disable class-methods-use-this */
import { Response } from 'express';

export class AppController {
  async createFlashCard(
    request: any,
    response: Response,
  ): Promise<any> {
    try {
      const { name, description } = request.body;
      if (!name || !description) return response.status(400).send({ message: 'Incomplete details' });
      return response.status(204);
    } catch (e) {
      return response.status(400).send({ error: 'Could not update flashcards' });
    }
  }
}
