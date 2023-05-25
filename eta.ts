import { parse } from "https://deno.land/std@0.189.0/yaml/parse.ts";
import { render } from "https://deno.land/x/eta@v2.2.0/mod.ts"

console.log('hello')

const data = parse(`
name: John
age: 30
`)
const tmpl = "The answer to everything is <%= it.name %>"
console.log(render(tmpl, data))
