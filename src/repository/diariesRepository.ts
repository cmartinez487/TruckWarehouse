import pool from '../config/db';
import { DiaryEntry, NewDiaryEntry } from '../types';

export const getEntries = async (): Promise<DiaryEntry[]> => {
  const [rows] = await pool.query('SELECT * FROM diaries');
  return rows as DiaryEntry[];
};

export const findById = async (id: number): Promise<DiaryEntry | undefined> => {
  const [rows] = await pool.query('SELECT * FROM diaries WHERE id = ?', [id]);
  return (rows as DiaryEntry[])[0];
};

export const addDiary = async (newDiaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
  const { date, weather, visibility, comment } = newDiaryEntry;
  const [result] = await pool.query(
    'INSERT INTO diaries (date, weather, visibility, comment, status) VALUES (?, ?, ?, ?, ?)',
    [date, weather, visibility, comment, true]
  );
  const insertId = (result as any).insertId;
  return { id: insertId, date, weather, visibility, comment, status: true };
};