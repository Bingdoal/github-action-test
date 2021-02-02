import express from 'express';
import calculateService from '../services/calculateService';

const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
    res.status(200).send('index');
});

router.get('/sum', function (req: express.Request, res: express.Response) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sum = calculateService.sum(a,b);
    res.status(200).send(`${sum}`);
});

export default router;