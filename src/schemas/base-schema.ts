import { z } from "zod";
import { SchemaData } from "../types/schemas";

export class BaseSchema<const TName extends string = string, TContent = any> {
    private _schema: z.ZodType<SchemaData<TContent, TName>>

    constructor(options: {
        name: TName,
        schema: z.ZodType<TContent>

    }) {
        this._schema = z.object({
            name: z.literal(options.name),
            content: options.schema
        }) as z.ZodType<SchemaData<TContent, TName>>;
    }

    validate(data: any) {
        const validationResult = this._schema.parse(data);

        return validationResult;
    };
}
