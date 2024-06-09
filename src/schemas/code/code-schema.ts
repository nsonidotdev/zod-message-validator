import { Schema, z } from "zod";
import { BaseSchema } from "../base/base-schema";


export class CodeSchema<const TName extends string = string>
    extends BaseSchema<TName, { code: string }> {

    constructor(name: TName) {
        super({
            name: name,
            schema: z.object({
                code: z.string()
            })
        });
    }
}
