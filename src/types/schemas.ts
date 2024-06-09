import { MapSchema, MetaSchema } from "../schema";

export type SchemaData<TContent, TName extends string> = {
    name: TName;
    content: TContent;
}


// export type MessageSchemaContent = MapSchemaContent
// | MetaSchema;
