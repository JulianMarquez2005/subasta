import { z } from "zod"
//Esta libreria valida esquemas y soporta typescript-interferencia con tipos estaticos
export const LoginSchema = z.object({
  username: z
    .string() //El username debe ser un string
    .min(1, 'Campo obligatorio') //Longitud minima de la cadena de texto es de 1 caracter
    .regex(/^[A-Za-z0-9\\._-]{7,}$/, 'Nombre de usuario invalido'), //Expresion regular para que la cadena de texto sea valida
  password: z.string ().min(1, 'Campo obligatorio')
})

export type LoginValues = z.infer<typeof LoginSchema>
// Infer extrae el tipo de datos que Zod espera para cumplir con el esquema de validacion en este caso de LoginSchema

/**
 * 
 * 
 */