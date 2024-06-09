import { z } from "zod";
import { BaseSchema } from "./base-schema";
import { describe, expect, it } from 'vitest'


const schema = z.object({
    name: z.string(),
    age: z.number(),
    address: z.object({
        country: z.union([z.literal('Argentina'), z.literal('USA')]),
        street: z.string(),
        house: z.string(),
    }).optional(),
})

const testBaseSchema = new BaseSchema({
    name: 'base-schema',
    schema
})

describe('BaseSchema', () => {
    it('Should successfuly validate correct data', () => {
        const inputData = {
            name: 'base-schema',
            content: {
                name: 'Oleksandr',
                age: 21,
                address: {
                    country: 'USA',
                    street: 'Vulytsia Baba',
                    house: '123/123'
                }
            },
        }

        const result = testBaseSchema.validate(inputData)

        expect(result).toEqual(inputData)
    })

    it('Should throw error on invalid data structure', () => {
        expect(() => testBaseSchema.validate('invalid data')).toThrow()
    })

    it('Should throw error on invalid part of data data ', () => {
        expect(() => testBaseSchema.validate({
            name: 'base-schema',
            content: {
                name: 'Oleksandr',
                age: 21,
                address: {
                    country: 'INVALID_COUNTRY',
                    street: 'Vulytsia Baba',
                    house: '123/123'
                }
            },
        })).toThrow()
    })
})