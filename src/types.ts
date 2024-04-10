import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodDate, ZodType } from "zod";

export const CompanySchema: ZodType<FormDataCompany> = z.object({
  cedula: z.number({
    required_error: "required field",
    invalid_type_error: "La cedula juridica es requerida",
  }),
  name: z.string().min(1, { message: "El nombre es requerido" }),
  address: z.string().min(1, { message: "La direccion es requerida" }),
  bankaccount: z.number({
    required_error: "required field",
    invalid_type_error: "La cuenta bancaria es requerida",
  }),
});

export type FormDataCompany = {
  cedula: number;
  name: string;
  address: string;
  bankaccount: number;
};
