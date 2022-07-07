import {Document} from "mongoose";

export interface CurrencyInterface  {
    symbol : string,
    USDRate : number,
}
export interface CurrencyRateInterface {
    symbol : string,
    value : number
}

export interface SymbolUSDRate {
  symbol : string
}

export interface CurrencyModelInterface extends Document {
  symbol: string,
  rates: CurrencyRateInterface[],
  date:  string
}

export interface RateArray {
  [index : string] : string | number,
}
