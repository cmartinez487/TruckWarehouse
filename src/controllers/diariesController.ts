import { Request, Response } from 'express';
import toNewDiaryEntry from '../utils';
import { getEntries, findById, addDiary } from '../services/diarieService';

export const getAllDiaries = async (_req: Request, res: Response): Promise<void> => {
    try {
      const diaries = await getEntries();
      res.json(diaries);
    } catch (e) {
      console.error('Error fetching diaries:', e);
      res.status(500).send((e as Error).message);
    }
  };

export const getDiaryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).send('Invalid ID');
      return;
    }

    const diary = await findById(id);

    if (!diary) {
      res.status(404).send('Diary not found');
      return;
    }

    res.json(diary);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
};

export const createDiary = async (req: Request, res: Response): Promise<void> => {
    try {
      const newDiaryEntry = toNewDiaryEntry(req.body);
      const addedDiaryEntry = await addDiary(newDiaryEntry);
      res.status(201).json(addedDiaryEntry);
    } catch (e) {
      res.status(400).send((e as Error).message);
    }
  };
