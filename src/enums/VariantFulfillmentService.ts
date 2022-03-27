export class VariantFulfillmentService {
    Manual: string;
    WebGistix: string;
    ShipWire: string;
    AmazonMarketplaceWeb: string;

    constructor() {
        this.Manual = 'manual';
        this.WebGistix = 'webgistix';
        this.ShipWire = 'shipwire';
        this.AmazonMarketplaceWeb = 'amazon_marketplace_web';
    }
}
