import { z } from "zod";
import { MapSchema } from "../schema";
import { BaseSchema } from "../schema/base-schema";

export class Validator<const T extends BaseSchema[]> {
    schemas: BaseSchema[];

    constructor(schemas: T) {
        this.schemas = schemas;
    }


    validate(data: any) {
        const validateSchemasResults = this.schemas.map(schema => {
            try {
                const dataparsed = schema.validate(data);

                return dataparsed;
            } catch (error) {
                console.log('error validating schema', error)
            }
        })

        return validateSchemasResults.find(Boolean)
    }
}

const mapSchema1 = new MapSchema('schema2', ['egor', 'krid'], z.object({
    hello: z.string(),
    world: z.object({
        hi: z.boolean()
    })
}))

const mapSchema2 = new MapSchema('schema2', ['world', 'hello'], z.object({
    hello: z.string(),
    world: z.object({
        hi: z.boolean()
    })
}))
const validatorInstance = new Validator([
    mapSchema1,
    mapSchema2
]);



const result = validatorInstance.validate('sample data')?.name 
