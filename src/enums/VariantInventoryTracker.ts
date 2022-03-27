export class VariantInventoryTracker {
    _NotTracked: string;
    Amazon: string;
    ShipWire: string;
    Shopify: string;
    constructor() {
        this.Amazon = 'amazon_marketplace_web';
        this.ShipWire = 'shipwire';
        this.Shopify = 'shopify';
        this._NotTracked = '';
    }
}
