import mongoose from "mongoose"
import {formatDate} from '../utils'
import {CurrencyModelInterface} from "../Interfaces";

const CurrencySchema = new mongoose.Schema<CurrencyModelInterface>({
    symbol : {type : String, require: true },
    rates : [mongoose.Schema.Types.Mixed],
    date: { type: String, require: true, default: formatDate(Date.now(), 'dd-mm-yyyy') },
});

export const CurrencyModel = mongoose.model<CurrencyModelInterface>('Currency', CurrencySchema)
