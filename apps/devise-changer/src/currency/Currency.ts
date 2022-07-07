import {CurrencyInterface, CurrencyModelInterface, CurrencyRateInterface} from "../Interfaces";
import { CurrencyModel } from "../models/deviseModel";
import { formatDate } from "../utils";

export default class Currency {
    rateFromUSD: any[];
    USDRatesArray: CurrencyInterface[];
    symbol: string;
    USDRate: number;
    rates: CurrencyRateInterface[];
    ModelInstance: CurrencyModelInterface;
    constructor(rateFromUSD : any[], USDRatesArray : any[]) {
        this.getCurrencyKeyValue(rateFromUSD, true);
        this.USDRatesArray = USDRatesArray.reduce((acc : any, curr :any) => {
            const currency = this.getCurrencyKeyValue(curr, false);
            return [...acc, currency]
        }, []) ;
        this.rates = this.USDRatesArray.map((currency) => this.getCurrencyRatio(currency))
          .filter((item) => typeof item !=='undefined')
    }
    getCurrencyKeyValue (currencyObj : any, isMainCurrency : boolean) : CurrencyInterface {
        let symbol : string, USDRate : number  ;
        Object.entries(currencyObj).forEach((obj : any[]) => {
            [symbol, USDRate] = obj;
        })
        if (isMainCurrency) {
            this.symbol = symbol;
            this.USDRate = USDRate;
        }
        return {
            symbol : symbol,
            USDRate : USDRate
        }
    }
    getCurrencyRatio (currencyObj : CurrencyInterface) : CurrencyRateInterface{
        if (currencyObj.symbol === this.symbol) {
            return;
        };
        const ratio = currencyObj.USDRate / this.USDRate;
        return {
            symbol : currencyObj.symbol,
            value : Number(ratio.toFixed(4))
        };
    }
    async getInstance() {
        await CurrencyModel.findOne({symbol: this.symbol, date : formatDate(Date.now(), 'dd-mm-yyyy')}).exec().then((result) => {
            this.ModelInstance = result ? result : new CurrencyModel({symbol : this.symbol})
        })
    }
    async updateData() {
        await this.getInstance()
        this.ModelInstance.rates = this.rates;
        this.ModelInstance.date = formatDate(Date.now(), 'dd-mm-yyyy');
        await this.ModelInstance.save()
    }
}
