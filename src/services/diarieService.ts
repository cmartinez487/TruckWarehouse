import { getEntries as getDiaryEntries, findById as findDiaryById, addDiary as addDiaryToRepo } from '../repository/diariesRepository';
import { NewDiaryEntry, DiaryEntry } from '../types';

export const getEntries = async (): Promise<DiaryEntry[]> => {
  return await getDiaryEntries();
};

export const findById = async (id: number): Promise<DiaryEntry | undefined> => {
  return await findDiaryById(id);
};

export const addDiary = async (newDiaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
  return await addDiaryToRepo(newDiaryEntry);
};