import { z } from "zod";
import { BaseSchema, CodeSchema, MapSchema } from "../schemas";
import { describe, expect, it } from "vitest";
import { Validator } from ".";


const codeSchema = new CodeSchema('code');
const mapSchema = new MapSchema('map', ['uk', 'en'], z.string());
const baseSchema = new BaseSchema({
    name: 'custom', schema: z.object({
        custom: z.array(z.number())
    })
})

const validator = new Validator([
    codeSchema,
    mapSchema,
    baseSchema,
])

describe('Validator', () => {
    it('Should return first successfuly parsed data', () => {
        const data = {
            name: 'map',
            content: {
                uk: 'Привіт, світ!',
                en: 'Hello, world!',
            }
        }
        const result = validator.validate(data)

        expect(result).toEqual(data)
    })

    it('Shouldn\'t be defined if no schema matched data', () => {
        const data = {
            very__1553__Ran_domKEY: {
                'randsx013-igfsdklmc ': 22 
            }
        }
        const result = validator.validate(data)

        expect(result).toBeUndefined()
    })
})