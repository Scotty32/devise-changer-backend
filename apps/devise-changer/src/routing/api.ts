import { Router} from "express"
import { CurrencyModel } from "../models/deviseModel"
import { getAvailiableCurrencies, updateCurrencies } from "../services/Currencies"
import { formatDate, getCurrencyNameBySymbol } from "../utils"
export const router = Router()
router.get('/avaliables',(req, res) => {
    getAvailiableCurrencies((data) => {
        const currenciesList =  data.reduce((acc, curr) => {
            const currencyName = getCurrencyNameBySymbol(curr);
            const currency = {
                name : currencyName,
                symbol : curr,
            };
            return [...acc, currency]
        }, [])
        res.json(currenciesList)
    }
    )
})
router.get('/forceUpdate', (req, res) => {
    updateCurrencies().then(() => res.json({message : 'data has been updated'}))
})

router.get('/pair/:from/:to', (req, res) => {
    const {from, to} = req.params
    CurrencyModel.findOne({date : formatDate(Date.now(), 'dd-mm-yyyy'), symbol : from.toUpperCase()}).exec((error, curruency) =>{
        res.json(curruency.rates)
    })
})
