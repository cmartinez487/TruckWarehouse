import { Weather, Visibility } from './enum';
export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
    status: boolean
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment' | 'status'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'| 'status'>;