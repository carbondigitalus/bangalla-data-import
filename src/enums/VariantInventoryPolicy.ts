export class VariantInventoryPolicy {
    Continue: string; // a product cannot be purchased after its inventory level reaches zero
    Deny: string; // a product can be purchased after its inventory level reaches zero: negative inventory levels are enabled
    constructor() {
        this.Continue = 'continue';
        this.Deny = 'deny';
    }
}
