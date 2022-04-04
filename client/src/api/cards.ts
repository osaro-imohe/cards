import http from './core';
import { CreateFlashCardsResponse, GetFlashCardsResponse, UpdateFlashCardsResponse } from '../types/api';

export const fetchFlashCards = async (): Promise<GetFlashCardsResponse> => {
  const { data } = await http.get<GetFlashCardsResponse>(
    '/cards',
  );
  return data;
};

export const fetchValidFlashCards = async (): Promise<GetFlashCardsResponse> => {
  const { data } = await http.get<GetFlashCardsResponse>(
    '/cards/valid',
  );
  return data;
};

export const createFlashCard = async (
  name: string,
  description: string,
): Promise<CreateFlashCardsResponse> => {
  const { data } = await http.post<CreateFlashCardsResponse>(
    '/cards/create',
    { name, description },
  );
  return data;
};

export const updateFlashCard = async (
  id: number,
  values: {[key: string]: number | string | Date},
): Promise<UpdateFlashCardsResponse> => {
  const { data } = await http.post<CreateFlashCardsResponse>(
    '/cards/update',
    { id, values },
  );
  return data;
};
