import { describe, expect, it } from "vitest";
import { CodeSchema } from "./code-schema";



const codeSchema = new CodeSchema('code-schema');

const validData = {
    name: 'code-schema',
    content: {
        code: 'my-code'
    }
}


describe('Code Schema', () => {
    it('Should validate correct data', () => {
        expect(codeSchema.validate(validData)).toEqual(validData)
    });

    it('Should fail with invalid content', () => {
        expect(() => codeSchema.validate('invalid')).toThrow()

    })
})