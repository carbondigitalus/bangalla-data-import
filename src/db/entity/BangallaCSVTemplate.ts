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
import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import 'reflect-metadata';

// Custom Modules
import { PriceCheck } from '../../enums';

@Entity('bangalla_products')
export default class BangallaCSVTemplate extends BaseEntity {
    // COLUMNS
    @PrimaryColumn({ type: 'varchar', length: 36, unique: true })
    @Generated('uuid')
    @IsNotEmpty()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    productName: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @Min(10000)
    @MinLength(5)
    sku: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @Length(12)
    upc: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceBangalla: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceWholesale: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceGold: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    manufacturer: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    category: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    descriptionShort: string;

    @Column()
    @IsString()
    descriptionLong?: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    weight: number;

    @Column()
    @IsString()
    @IsUrl()
    imageURL?: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    packSize: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    inventory: number;

    @Column()
    @IsNumber()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceMAP?: number;

    @Column()
    @IsString()
    @Equals('YES')
    thirdPartyRestrictions?: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT3: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT4: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT5: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT6: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT7: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([PriceCheck.prototype.Decimal, PriceCheck.prototype.Whole])
    priceT8: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    skuB: string;
}
