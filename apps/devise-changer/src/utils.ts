import { CURRENCIES_NAMES } from "./constants";

export const formatDate = (timestamp : number, format : string) : string => {
    const date = new Date(timestamp)
    return format.replace('mm', `${date.getMonth() + 1}`)
        .replace('yyyy', `${date.getFullYear()}`)
        .replace('dd', `${date.getDate()}`);
}
export const convertObjecttoArrayOfObjects = (obj : any) : any[] => {

    const array : any[] = Object.entries(obj).map((currency) => {
        const [symbol, USDRate] = currency;
        return {[symbol] : USDRate}
    })
    return array
}
export const getCurrencyNameBySymbol = (symbol : string) : string => {
    return CURRENCIES_NAMES[symbol.toUpperCase()]
}
