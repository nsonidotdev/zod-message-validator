import { describe, expect, it } from "vitest";
import { z } from "zod";
import { MapSchema } from "./map-schema";

const itemSchema = z.object({
    title: z.string(),
    amount: z.number(),
})


const mapArrayKeysSchema = new MapSchema('key-array-map-schema', ['en', 'uk', 'fr'], itemSchema)
const mapStringKeySchema = new MapSchema('key-string-map-schema', 'en', itemSchema)

describe('Map Schema', () => {
    it("Should validate correct data with array keys", () => {
        const data = {
            name: 'key-array-map-schema',
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
        expect(mapArrayKeysSchema.validate(data)).toEqual(data)
    })


    it('Should validate correct data with string key', () => {
        const data = {
            name: 'key-string-map-schema',
            content: {
                en: {
                    title: 'lorem ipsum',
                    amount: 20,
                },
            }
        }
        expect(mapStringKeySchema.validate(data)).toEqual(data)
    })


    it('Should throw an error on missing key', () => {
        expect(() => mapArrayKeysSchema.validate({
            name: 'key-array-map-schema',
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