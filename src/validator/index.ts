import { z } from "zod";
import { MapSchema } from "../schemas";
import { BaseSchema } from "../schemas/base-schema";

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
                // console.log('error validating schema', error)
            }
        })

        return validateSchemasResults.find(Boolean)
    }
}
