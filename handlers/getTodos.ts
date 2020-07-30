import { Context } from "https://deno.land/x/oak/mod.ts";
import { getTodos } from "../services/todos.ts"

// export default async({ response } : Context) =>
export default async( { response } : Context) =>
{
    response.body = await getTodos();
};