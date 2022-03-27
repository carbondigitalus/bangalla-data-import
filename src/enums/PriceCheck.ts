export class PriceCheck {
    Decimal: RegExp;
    Whole: RegExp;

    constructor() {
        this.Decimal = new RegExp('^[+ 0-9]{5}$');
        this.Whole = new RegExp('^[0-9]d{0,9}(.d{1,2})?%?$');
    }
}
