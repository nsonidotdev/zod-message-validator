export { MapSchema, CustomSchema, MetaSchema } from "./schema/custom";
import { Validator } from './validator'

export { Validator }


const validatorInstance = new Validator();
validatorInstance.log()