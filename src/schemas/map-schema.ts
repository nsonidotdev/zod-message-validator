import { Schema, z } from "zod";
import { BaseSchema } from "./base-schema";


export class MapSchema<const TName extends string = string, TItem = any, const TKeys extends string | string[] = string>
    extends BaseSchema<TName, Record<
        TKeys extends string
        ? TKeys
        : TKeys[number],
        TItem
    >> {

    constructor(name: TName, mapKeys: TKeys, itemSchema: z.ZodType<TItem>) {
        super(
            {
                name: name,
                schema: z.record(itemSchema)
                    .refine(value => {
                        // Check keys 
                        const keys = Object.keys(value);

                        return keys.every(key => mapKeys.includes(key)) && mapKeys.length === keys.length;
                    })
            }

        );

    }

}
