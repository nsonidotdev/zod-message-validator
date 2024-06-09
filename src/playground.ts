export { MapSchema } from "./schemas";
import { z } from "zod";
import { CodeSchema, MapSchema } from "./schemas";
import { Validator } from './validator'

export { Validator }


const mapSchema1 = new MapSchema('schema1', ['egor', 'krid'], z.object({
    hello: z.string(),
    world: z.object({
        hi: z.boolean()
    })
}))

const mapSchema2 = new CodeSchema('schema2')
const validatorInstance = new Validator([
    mapSchema1,
    mapSchema2
]);

