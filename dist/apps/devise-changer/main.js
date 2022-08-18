/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/devise-changer/src/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CURRENCIES_NAMES = exports.API_ENDPOINTS = exports.API_BASE_URL = void 0;
exports.API_BASE_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`;
exports.API_ENDPOINTS = {
    getList: () => ({
        url: `${exports.API_BASE_URL}/supported_codes`,
    }),
    getRates: (devise = 'USD') => ({
        url: `${exports.API_BASE_URL}/latest/${devise}`
    })
};
exports.CURRENCIES_NAMES = {
    AED: "Arab Emirates Dirham",
    AFN: "Afghanistan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Dutch Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Guilder",
    AZN: "Azerbaijan New Manat",
    BAM: "Marka",
    BBD: "Barbados Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundi Franc",
    BYN: "Belarusian Ruble",
    BMD: "Bermudian Dollar",
    BND: "Brunei Dollar",
    BOB: "Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTN: "Bhutan Ngultrum",
    BWP: "Botswana Pula",
    BYR: "Belarussian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Francs",
    CHF: "Swiss Franc",
    CLP: "Chilean Peso",
    CNY: "Yuan Renminbi",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colon",
    CUP: "Cuban Peso",
    CVE: "Cape Verde Escudo",
    CZK: "Czech Koruna",
    DJF: "Djibouti Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    ECS: "Ecuador Sucre",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fiji Dollar",
    FKP: "Falkland Islands Pound",
    FOK: "Faroese Króna",
    GTQ: "Guatemalan Quetzal",
    IMP: "Manx pound, Isle of Man",
    GBP: "Pound Sterling",
    GEL: "Georgian Lari",
    GGP: "Pound Sterling",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinea Franc",
    GWP: "Guinea-Bissau Peso",
    GYD: "Guyana Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Shekel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Iceland Krona",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    JEP: "Jersey Pound",
    KES: "Kenyan Shilling",
    KGS: "Som",
    KHR: "Kampuchean Riel",
    KMF: "Comoros Franc",
    KPW: "North Korean Won",
    KRW: "Korean Won",
    KID: "Kiribati Dollar",
    STN: "São Tomé and Príncipe Dobra",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstan Tenge",
    LAK: "Lao Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lanka Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LTL: "Lithuanian Litas",
    LVL: "Latvian Lats",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGF: "Malagasy Franc",
    MKD: "Denar",
    MMK: "Myanmar Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macau Pataca",
    MRO: "Mauritanian Ouguiya",
    MGA: "Malagasy ariary",
    MRU: "Mauritanian ouguiya",
    MUR: "Mauritius Rupee",
    MVR: "Maldive Rufiyaa",
    MWK: "Malawi Kwacha",
    MXN: "Mexican Nuevo Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambique Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Cordoba Oro",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinea Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistan Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguay Guarani",
    QAR: "Qatari Rial",
    QTQ: "Guatemalan Quetzal",
    RON: "Romanian New Leu",
    RSD: "Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwanda Franc",
    SAR: "Saudi Riyal",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychelles Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "St. Helena Pound",
    SLL: "Sierra Leone Leone",
    SOS: "Somali Shilling",
    SRD: "Surinam Dollar",
    SSP: "South Sudan Pound",
    STD: "Dobra",
    SVC: "El Salvador Colon",
    SYP: "Syrian Pound",
    SZL: "Swaziland Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajik Somoni",
    TMT: "Manat",
    TND: "Tunisian Dollar",
    TOP: "Tongan Pa'anga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    TVD: "Tuvaluan Dollar",
    UAH: "Ukraine Hryvnia",
    UGX: "Uganda Shilling",
    USD: "US Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Sum",
    VEF: "Venezuelan Bolivar",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    VES: "Venezuelan Bolívar",
    WST: "Samoan Tala",
    XAF: "CFA Franc BEAC",
    XCD: "East Caribbean Dollar",
    XOF: "CFA Franc BCEAO",
    XPF: "CFP Franc",
    XDR: "Special Drawing Right",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
    ZWD: "Zimbabwe Dollar",
    ZWL: "Zimbabwean Dollar",
};


/***/ }),

/***/ "./apps/devise-changer/src/currency/Currency.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const deviseModel_1 = __webpack_require__("./apps/devise-changer/src/models/deviseModel.ts");
const utils_1 = __webpack_require__("./apps/devise-changer/src/utils.ts");
class Currency {
    constructor(rateFromUSD, USDRatesArray) {
        this.getCurrencyKeyValue(rateFromUSD, true);
        this.USDRatesArray = USDRatesArray.reduce((acc, curr) => {
            const currency = this.getCurrencyKeyValue(curr, false);
            return [...acc, currency];
        }, []);
        this.rates = this.USDRatesArray.map((currency) => this.getCurrencyRatio(currency))
            .filter((item) => typeof item !== 'undefined');
    }
    getCurrencyKeyValue(currencyObj, isMainCurrency) {
        let symbol, USDRate;
        Object.entries(currencyObj).forEach((obj) => {
            [symbol, USDRate] = obj;
        });
        if (isMainCurrency) {
            this.symbol = symbol;
            this.USDRate = USDRate;
        }
        return {
            symbol: symbol,
            USDRate: USDRate
        };
    }
    getCurrencyRatio(currencyObj) {
        if (currencyObj.symbol === this.symbol) {
            return;
        }
        ;
        const ratio = currencyObj.USDRate / this.USDRate;
        return {
            symbol: currencyObj.symbol,
            value: Number(ratio.toFixed(4))
        };
    }
    getInstance() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield deviseModel_1.CurrencyModel.findOne({ symbol: this.symbol, date: (0, utils_1.formatDate)(Date.now(), 'dd-mm-yyyy') }).exec().then((result) => {
                this.ModelInstance = result ? result : new deviseModel_1.CurrencyModel({ symbol: this.symbol });
            });
        });
    }
    updateData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.getInstance();
            this.ModelInstance.rates = this.rates;
            this.ModelInstance.date = (0, utils_1.formatDate)(Date.now(), 'dd-mm-yyyy');
            yield this.ModelInstance.save();
        });
    }
}
exports["default"] = Currency;


/***/ }),

/***/ "./apps/devise-changer/src/jobs/APIJobs.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const cron = __webpack_require__("node-cron");
const Currencies_1 = __webpack_require__("./apps/devise-changer/src/services/Currencies.ts");
function updateDataJob() {
    cron.schedule('0 0 * * *', () => {
        (0, Currencies_1.updateCurrencies)();
    });
}
exports["default"] = updateDataJob;


/***/ }),

/***/ "./apps/devise-changer/src/models/deviseModel.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrencyModel = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const utils_1 = __webpack_require__("./apps/devise-changer/src/utils.ts");
const CurrencySchema = new mongoose_1.default.Schema({
    symbol: { type: String, require: true },
    rates: [mongoose_1.default.Schema.Types.Mixed],
    date: { type: String, require: true, default: (0, utils_1.formatDate)(Date.now(), 'dd-mm-yyyy') },
});
exports.CurrencyModel = mongoose_1.default.model('Currency', CurrencySchema);


/***/ }),

/***/ "./apps/devise-changer/src/routing/api.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.router = void 0;
const express_1 = __webpack_require__("express");
const deviseModel_1 = __webpack_require__("./apps/devise-changer/src/models/deviseModel.ts");
const Currencies_1 = __webpack_require__("./apps/devise-changer/src/services/Currencies.ts");
const utils_1 = __webpack_require__("./apps/devise-changer/src/utils.ts");
exports.router = (0, express_1.Router)();
exports.router.get('/availables', (req, res) => {
    (0, Currencies_1.getAvailiableCurrencies)((data) => {
        const currenciesList = data.reduce((acc, curr) => {
            const currencyName = (0, utils_1.getCurrencyNameBySymbol)(curr);
            const currency = {
                name: currencyName,
                symbol: curr,
            };
            return [...acc, currency];
        }, []);
        res.json(currenciesList);
    });
});
exports.router.get('/forceUpdate', (req, res) => {
    (0, Currencies_1.updateCurrencies)().then(() => res.json({ message: 'data has been updated' }));
});
exports.router.get('/rates/:from', (req, res) => {
    const { from } = req.params;
    console.log(from);
    deviseModel_1.CurrencyModel.findOne({ date: (0, utils_1.formatDate)(Date.now(), 'dd-mm-yyyy'), symbol: from.toUpperCase() }).exec((error, curruency) => {
        res.json(curruency === null || curruency === void 0 ? void 0 : curruency.rates);
    });
});


/***/ }),

/***/ "./apps/devise-changer/src/services/AppServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const APIJobs_1 = __webpack_require__("./apps/devise-changer/src/jobs/APIJobs.ts");
function AppService() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect('mongodb+srv://scotdev:Narutokun2021@cluster0.djltuwm.mongodb.net/?retryWrites=true&w=majority')
            .then((res) => {
            (0, APIJobs_1.default)();
        })
            .catch((err) => {
            throw new Error(`la base de donnee est indisponible ${err.message}`);
        });
    });
}
exports["default"] = AppService;


/***/ }),

/***/ "./apps/devise-changer/src/services/Currencies.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAvailiableCurrencies = exports.updateCurrencies = void 0;
const tslib_1 = __webpack_require__("tslib");
const axios_1 = __webpack_require__("axios");
const constants_1 = __webpack_require__("./apps/devise-changer/src/constants.ts");
const Currency_1 = __webpack_require__("./apps/devise-changer/src/currency/Currency.ts");
const deviseModel_1 = __webpack_require__("./apps/devise-changer/src/models/deviseModel.ts");
const utils_1 = __webpack_require__("./apps/devise-changer/src/utils.ts");
function updateCurrencies() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.get(constants_1.API_ENDPOINTS.getRates().url)
            .then((res) => {
            const USDCurrenciesRates = (0, utils_1.convertObjecttoArrayOfObjects)(res.data.conversion_rates);
            const currenciesList = USDCurrenciesRates.map((currency) => new Currency_1.default(currency, USDCurrenciesRates));
            currenciesList.forEach(currency => {
                currency.updateData();
            });
            console.log('ok');
        });
    });
}
exports.updateCurrencies = updateCurrencies;
function getAvailiableCurrencies(func) {
    const currencies = deviseModel_1.CurrencyModel.find({ date: (0, utils_1.formatDate)(Date.now(), 'dd-mm-yyyy') }, 'symbol');
    currencies.exec(function (err, symbols) {
        if (err) {
            throw new Error(err.message);
        }
        const data = symbols.reduce((acc, curr) => {
            const { symbol } = curr;
            return [...acc, symbol];
        }, []);
        func(data);
    });
}
exports.getAvailiableCurrencies = getAvailiableCurrencies;


/***/ }),

/***/ "./apps/devise-changer/src/utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCurrencyNameBySymbol = exports.convertObjecttoArrayOfObjects = exports.formatDate = void 0;
const constants_1 = __webpack_require__("./apps/devise-changer/src/constants.ts");
const formatDate = (timestamp, format) => {
    const date = new Date(timestamp);
    return format.replace('mm', `${date.getMonth() + 1}`)
        .replace('yyyy', `${date.getFullYear()}`)
        .replace('dd', `${date.getDate()}`);
};
exports.formatDate = formatDate;
const convertObjecttoArrayOfObjects = (obj) => {
    const array = Object.entries(obj).map((currency) => {
        const [symbol, USDRate] = currency;
        return { [symbol]: USDRate };
    });
    return array;
};
exports.convertObjecttoArrayOfObjects = convertObjecttoArrayOfObjects;
const getCurrencyNameBySymbol = (symbol) => {
    return constants_1.CURRENCIES_NAMES[symbol.toUpperCase()];
};
exports.getCurrencyNameBySymbol = getCurrencyNameBySymbol;


/***/ }),

/***/ "axios":
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "dotenv/config":
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "node-cron":
/***/ ((module) => {

module.exports = require("node-cron");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
__webpack_require__("dotenv/config");
const AppServices_1 = __webpack_require__("./apps/devise-changer/src/services/AppServices.ts");
const api_1 = __webpack_require__("./apps/devise-changer/src/routing/api.ts");
const app = express();
(0, AppServices_1.default)();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    console.log('receive');
    next();
});
app.use('/api', api_1.router);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map