import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments
} from 'class-validator';
import { BangallaCSVTemplate } from '../entity';
const tsDBConnect = require('typeorm');
require('reflect-metadata');

// Connect to MySQL DB
tsDBConnect
    .createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: true,
        entities: [BangallaCSVTemplate]
    })
    .then(() => {
        // here you can start to work with your entities
        console.log('MySQL Database Connection Status: success');
    })
    .catch((error: any) => console.log(error));

@ValidatorConstraint({ async: true })
export class IsSKUPresentConstraint implements ValidatorConstraintInterface {
    validate(record: any, args: ValidationArguments) {
        return findMatchingSKU(record);
    }
}

export default function IsSKUPresent(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSKUPresentConstraint
        });
    };
}

async function findMatchingSKU(record: any) {
    const recordCheck = await tsDBConnect
        .getRepository(BangallaCSVTemplate)
        .createQueryBuilder('bangalla_product_list')
        .where(`${record}.sku = :sku`, { sku: record.sku })
        .getOne();

    if (recordCheck) return false;
    return true;
}
