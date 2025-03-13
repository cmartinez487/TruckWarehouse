import { Router } from 'express';
import * as diariesService from '../services/diariesServices';
import toNewDiaryEntry from '../utils';

const router = Router();

router.get('/diaries', (_req, res) => {
    res.send(diariesService.getEntriesWitoutSensitiveInfo());
});

router.get('/diaries/:id', (req, res) => {
    const diary = diariesService.findById(Number(req.params.id));

    (diary != null) ? res.send(diary) : res.sendStatus(404);
});

router.post('/diaries', (req, res) => {
    try
    {
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diariesService.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }catch(e){
        res.sendStatus(400).send(e);
    }   
});

export default router;