import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} (${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
