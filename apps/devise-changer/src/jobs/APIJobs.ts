import * as cron from 'node-cron';
import { updateCurrencies } from '../services/Currencies';

export default function updateDataJob() { 
    cron.schedule('0 0 * * *', () => {
        updateCurrencies();
    })
}
