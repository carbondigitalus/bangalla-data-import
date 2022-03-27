// Field Ref taken from CSV.
// Some config settings are assumed based on the data present in CSV.

// NPM Modules
import {
    Equals,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Length,
    MinLength,
    Min
} from 'class-validator';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import 'reflect-metadata';

// Custom Modules
import { PriceCheck } from '../../enums';

@Entity()
export default class BangallaCSVTemplate {
    // COLUMNS
    @PrimaryGeneratedColumn('uuid')
    @IsNotEmpty()
    id: number;

    @Column({ name: 'Product Name' })
    @IsString()
    @IsNotEmpty()
    productName: string;

    @Column({ name: 'SKU' })
    @IsNumber()
    @IsNotEmpty()
    @Min(10000)
    @MinLength(5)
    sku: number;

    @Column({ name: 'UPC' })
    @IsNumber()
    @IsNotEmpty()
    @Length(12)
    upc: number;

    @Column({ name: 'Bangalla Public Price' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceBangalla: number;

    @Column({ name: 'Wholesale Price' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceWholesale: number;

    @Column({ name: 'Gold Member Price' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceGold: number;

    @Column({ name: 'Manufacturer' })
    @IsString()
    @IsNotEmpty()
    manufacturer: string;

    @Column({ name: 'Category' })
    @IsString()
    @IsNotEmpty()
    category: string;

    @Column({ name: 'Description, Short' })
    @IsString()
    @IsNotEmpty()
    descriptionShort: string;

    @Column({ name: 'Description, Long' })
    @IsString()
    descriptionLong?: string;

    @Column({ name: 'Weight' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    weight: number;

    @Column({ name: 'Image URL' })
    @IsString()
    @IsUrl()
    imageURL?: string;

    @Column({ name: 'Pack Size' })
    @IsString()
    @IsNotEmpty()
    packSize: string;

    @Column({ name: 'Inventory' })
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    inventory: number;

    @Column({ name: 'MAP' })
    @IsNumber()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceMAP?: number;

    @Column({ name: '3rd-Party Restrictions' })
    @IsString()
    @Equals('YES')
    thirdPartyRestrictions?: string;

    @Column({ name: 'Price T3' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT3: number;

    @Column({ name: 'Price T4' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT4: number;

    @Column({ name: 'Price T5' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT5: number;

    @Column({ name: 'Price T6' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT6: number;

    @Column({ name: 'Price T7' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT7: number;

    @Column({ name: 'Price T8' })
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT8: number;

    @Column({ name: 'BSKU' })
    @IsString()
    @IsNotEmpty()
    bSKU: string;
}
