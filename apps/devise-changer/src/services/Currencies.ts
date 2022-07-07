import axios from 'axios'
import { API_ENDPOINTS } from '../constants'
import Currency from '../currency/Currency'
import { CurrencyModel } from '../models/deviseModel'
import { convertObjecttoArrayOfObjects, formatDate } from '../utils'

export async function updateCurrencies() {
    await axios.get(API_ENDPOINTS.getRates().url)
            .then((res) => {
                const USDCurrenciesRates = convertObjecttoArrayOfObjects(res.data.conversion_rates)
                const currenciesList = USDCurrenciesRates.map((currency) => new Currency(currency, USDCurrenciesRates));
                currenciesList.forEach(currency => {
                    currency.updateData();
                })
                console.log('ok')
                }
            )
} 
export function getAvailiableCurrencies(func) {
    const currencies = CurrencyModel.find({ date : formatDate(Date.now(), 'dd-mm-yyyy')}, 'symbol')
    currencies.exec(function(err, symbols) {
        if (err) {
            throw new Error(err.message)
        }
        const data = symbols.reduce((acc, curr) => {
            const {symbol} = curr;
            return [...acc, symbol]
        }, [])
        func(data);        
    })
}