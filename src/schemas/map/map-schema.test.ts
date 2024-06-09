import { describe, expect, it } from "vitest";
import { z } from "zod";
import { MapSchema } from "./map-schema";

const itemSchema = z.object({
    title: z.string(),
    amount: z.number(),
})

const validData = {
    name: 'map-schema',
    content: {
        en: {
            title: 'lorem ipsum',
            amount: 20,
        },
        uk: {
            title: 'lorem ipsum',
            amount: 20,
        },
        fr: {
            title: 'lorem ipsum',
            amount: 20,
        },
    }
}

const mapSchema = new MapSchema('map-schema', ['en', 'uk', 'fr'], itemSchema)

describe('Map Schema', () => {
    it("Should pass valid data", () => {
        expect(mapSchema.validate(validData)).toEqual(validData)
    })

    it('Should throw an error on missing key', () => {
        expect(() => mapSchema.validate({
            name: 'map-schema',
            content: {
                en: {
                    title: 'lorem ipsum',
                    amount: 20,
                },
                uk: {
                    title: 'lorem ipsum',
                    amount: 20,
                },

            }
        })).toThrow()
    })
})