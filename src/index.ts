export { MapSchema, MetaSchema } from "./schema";
import { z } from "zod";
import { MapSchema } from "./schema";
import { Validator } from './validator'

export { Validator }


const mapSchema = new MapSchema('hlwrld', ['egor', 'krid'], z.object({
    hello: z.string(),
    world: z.object({
        hi: z.boolean()
    })
}))
const validatorInstance = new Validator([
    mapSchema
]);

const result = validatorInstance.validate({
    kind: 'map',
    data: {
        egor: {
            hello: 'test1',
            world: {
                hi: false
            }
        },
        krid: {
            hello: 'test2',
            world: {
                hi: false
            }
        },
    }

})



