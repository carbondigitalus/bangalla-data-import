// Shopify CSV Template Ref:
// https://help.shopify.com/en/manual/products/import-export/import-products

// Required Field Ref:
// https://firebearstudio.com/blog/the-ultimate-guide-to-shopify-import.html

// NPM Modules
import {
    IsBoolean,
    IsEmpty,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Matches,
    MinLength,
    MaxLength,
    Min,
    NotContains,
    IsIn
} from 'class-validator';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import 'reflect-metadata';

// Custom Modules
import {
    GoogleShoppingAgeGroup,
    GoogleShoppingCondition,
    GoogleShoppingGender,
    PriceCheck,
    ProductStatus,
    VariantFulfillmentService,
    VariantInventoryPolicy,
    VariantInventoryTracker,
    VariantWeightUnit
} from '../../enums';

@Entity()
export default class ShopifyCSVTemplate {
    // COLUMNS
    @PrimaryGeneratedColumn('uuid')
    @IsNotEmpty()
    id: number;

    @Column({ name: 'Handle' })
    @IsString()
    @IsNotEmpty()
    handle: string;

    @Column({ name: 'Title' })
    @IsString()
    title?: string;

    @Column({ name: 'Body (HTML)' })
    @IsString()
    body?: string;

    @Column({ name: 'Vendor' })
    @IsString()
    @IsNotEmpty()
    @MinLength(2, {
        message: 'Min of 2 characters required. Values can be blank spaces.'
    })
    vendor: string;

    @Column({ name: 'Standardized Product Type' })
    @IsString()
    standardizedProductType?: string;

    @Column({ name: 'Custom Product Type' })
    @IsString()
    customProductType?: string;

    @Column({ name: 'Tags' })
    @IsString()
    tags?: string;

    @Column({ name: 'Published', default: true })
    @IsBoolean()
    @IsNotEmpty()
    published: boolean;

    @Column({ name: 'Option1 Name' })
    @IsString()
    @IsNotEmpty()
    option1Name: string;

    @Column({ name: 'Option1 Value' })
    @IsString()
    @IsNotEmpty()
    option1Value: string;

    @Column({ name: 'Option2 Name' })
    @IsString()
    option2Name?: string;

    @Column({ name: 'Option2 Value' })
    @IsString()
    option2Value?: string;

    @Column({ name: 'Option3 Name' })
    @IsString()
    option3Name?: string;

    @Column({ name: 'Option3 Value' })
    @IsString()
    option3Value?: string;

    @Column({ name: 'Variant SKU' })
    @IsString()
    variantSKU?: string;

    @Column({ name: 'Variant Grams' })
    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: 'Weight must be at least 0 or greater.' })
    variantGrams: number;

    @Column({ name: 'Variant Inventory Tracker' })
    @IsString()
    @IsIn([
        VariantInventoryTracker.prototype.Amazon,
        VariantInventoryTracker.prototype.ShipWire,
        VariantInventoryTracker.prototype.Shopify,
        VariantInventoryTracker.prototype._NotTracked
    ])
    variantInventoryTracker?: string;

    @Column({ name: 'Variant Inventory Qty' })
    @IsNumber()
    @IsInt()
    variantInventoryQty?: number;

    @Column({ name: 'Variant Inventory Policy' })
    @IsString()
    @IsNotEmpty()
    @IsIn([
        VariantInventoryPolicy.prototype.Continue,
        VariantInventoryPolicy.prototype.Deny
    ])
    variantInventoryPolicy: string;

    @Column({ name: 'Variant Fulfillment Service' })
    @IsString()
    @IsIn([
        VariantFulfillmentService.prototype.AmazonMarketplaceWeb,
        VariantFulfillmentService.prototype.Manual,
        VariantFulfillmentService.prototype.ShipWire,
        VariantFulfillmentService.prototype.WebGistix
    ])
    variantFulfillmentService: string;

    @Column({ name: 'Variant Price' })
    @IsNotEmpty()
    @Matches(PriceCheck.prototype.Decimal || PriceCheck.prototype.Whole, {
        message:
            'A price must be 12 digits or less. The last 2 digits come after the decimal ($.00) to represent the cents.'
    })
    variantPrice: number;

    @Column({ name: 'Variant Compare At Price' })
    @Matches(PriceCheck.prototype.Decimal || PriceCheck.prototype.Whole, {
        message:
            'A price must be 12 digits or less. The last 2 digits come after the decimal ($.00) to represent the cents.'
    })
    variantCompareAtPrice?: number;

    @Column({ name: 'Variant Requires Shipping', default: true })
    @IsBoolean()
    @IsNotEmpty()
    variantRequiresShipping: boolean;

    @Column({ name: 'Variant Taxable', default: true })
    @IsBoolean()
    @IsNotEmpty()
    variantTaxable: boolean;

    @Column({ name: 'Variant Barcode' })
    @IsString()
    variantBarcode: string;

    @Column({ name: 'Image Src' })
    @IsString()
    @IsUrl()
    @NotContains('_thumb')
    @NotContains('_small')
    @NotContains('_medium')
    imageSrc: string;

    @Column({ name: 'Image Position' })
    @IsNumber()
    imagePosition?: number;

    @Column({ name: 'Image Alt Text' })
    @IsString()
    @MaxLength(512, {
        message: 'Max length for an alt text is 512 characters.'
    })
    imageAltText?: string;

    @Column({ name: 'Gift Card', default: false })
    @IsBoolean()
    @IsNotEmpty()
    giftCard: boolean;

    @Column({ name: 'SEO Title' })
    @IsString()
    @MaxLength(70, { message: 'Max length for an SEO title is 70 characters.' })
    seoTitle?: string;

    @Column({ name: 'SEO Description' })
    @IsString()
    @MaxLength(320, {
        message: 'Max length for an SEO description is 320 characters.'
    })
    seoDescription?: string;

    @Column({ name: 'Google Shopping / Google Product Category' })
    @IsString()
    googleShoppingProductCategory?: string;

    @Column({ name: 'Google Shopping / Gender' })
    @IsString()
    @IsIn([
        GoogleShoppingGender.prototype.Male,
        GoogleShoppingGender.prototype.Female,
        GoogleShoppingGender.prototype.Unisex
    ])
    googleShoppingGender?: string;

    @Column({ name: 'Google Shopping / Age Group' })
    @IsString()
    @IsIn([
        GoogleShoppingAgeGroup.prototype.Newborn,
        GoogleShoppingAgeGroup.prototype.Infant,
        GoogleShoppingAgeGroup.prototype.Toddler,
        GoogleShoppingAgeGroup.prototype.Kids,
        GoogleShoppingAgeGroup.prototype.Adult
    ])
    googleShoppingAgeGroup?: string;

    @Column({ name: 'Google Shopping / MPN' })
    @IsString()
    @MinLength(1)
    @MaxLength(70)
    googleShoppingMPN?: string;

    @Column({ name: 'Google Shopping / AdWords Grouping' })
    @IsString()
    googleShoppingAdWordsGrouping?: string;

    @Column({ name: 'Google Shopping / AdWords Labels' })
    @IsString()
    googleShoppingAdWordsLabels?: string;

    @Column({ name: 'Google Shopping / Condition' })
    @IsString()
    @IsIn([
        GoogleShoppingCondition.prototype.New,
        GoogleShoppingCondition.prototype.Used,
        GoogleShoppingCondition.prototype.Refurbished,
        GoogleShoppingCondition.prototype.Damaged
    ])
    googleShoppingCondition?: string;

    @Column({ name: 'Google Shopping / Custom Product' })
    @IsString()
    googleShoppingCustomProduct?: string;

    @Column({ name: 'Google Shopping / Custom Label 0' })
    @IsString()
    googleShoppingCustomLabel0?: string;

    @Column({ name: 'Google Shopping / Custom Label 1' })
    @IsString()
    googleShoppingCustomLabel1?: string;

    @Column({ name: 'Google Shopping / Custom Label 2' })
    @IsString()
    googleShoppingCustomLabel2?: string;

    @Column({ name: 'Google Shopping / Custom Label 3' })
    @IsString()
    googleShoppingCustomLabel3?: string;

    @Column({ name: 'Google Shopping / Custom Label 4' })
    @IsString()
    googleShoppingCustomLabel4?: string;

    @Column({ name: 'Variant Image' })
    @IsString()
    @IsUrl()
    variantImage?: string;

    @Column({ name: 'Variant Weight Unit' })
    @IsString()
    @IsIn([
        VariantWeightUnit.prototype.Gram,
        VariantWeightUnit.prototype.KiloGram,
        VariantWeightUnit.prototype.Ounce,
        VariantWeightUnit.prototype.Pound
    ])
    variantWeightUnit?: string;

    @Column({ name: 'Variant Tax Code' }) // shopify plus clients need to research
    @IsString()
    @IsEmpty()
    variantTaxCode?: string;

    @Column({ name: 'Cost Per Item' })
    @IsNumber()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    costPerItem?: number;

    @Column({ name: 'Price / International' })
    @IsNumber()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceInternational?: number;

    @Column({ name: 'Compare At Price / International' })
    @IsString()
    compareAtPriceInternational: string;

    @Column({ name: 'Status', default: ProductStatus.prototype.Active })
    @IsString()
    @IsNotEmpty()
    @IsIn([
        ProductStatus.prototype.Active,
        ProductStatus.prototype.Archived,
        ProductStatus.prototype.Draft
    ])
    status: string;
}
