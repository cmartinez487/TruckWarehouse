import diaryData from '../services/diaries.json';
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry} from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);

    if (entry!= null){
        const {comment, ...others} = entry;
        return others;
    }

    return undefined;
};

export const getEntriesWitoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

export const addDiary= (newDiaryEntry : NewDiaryEntry) => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ... newDiaryEntry
    };

    diaries.push(newDiary);
    return newDiary;
};