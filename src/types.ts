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


export type FormDataUser = {
  mail:string;
  password:string;
}

export const FormUserSchema:ZodType<FormDataUser> = z.object({
  mail: z.string().email(),
  password: z.string().min(8, {message:"La contraseña es muy corta"}).max(20,  {message:"La contraseña es muy larga"})
})

export const FormVolunteerSchema: ZodType<FormDataVolunteer> = z.object({
  mail: z.string().email({message: 'Correo invalido'}),
  password: z.string().min(8, {message:"La contraseña es muy corta"}).max(20,  {message:"La contraseña es muy larga"}),
  cedula: z.number().min(8,{message:'La cedula debe de contener al menos 8 digitos'}),
  name: z.string({required_error: "El nombre es requerido"}).min(3, {message: "El nombre debe de tener al menos 3 digitos"}),
  lastName1:z.string({required_error: "El primer apellido es requerido"}).min(3, {message: "El primer apellido debe de tener al menos 3 digitos"}),
  lastName2:z.string({required_error: "El segundo apellido es requerido"}).min(3, {message: "El segundo apellido debe de tener al menos 3 digitos"}),
  birthday:z.string({required_error: "La fecha de nacimiento es requerida"}),
  address:z.string({required_error: "La direccion de la persona es requerida"}).min(5, {message: "La direccion es requerida y tiene que tener minimo 5 digitos"}),
  
})

export type FormDataVolunteer = {
  mail:string;
  password:string;
  cedula:number;
  name:string;
  lastName1:string;
  lastName2:string;
  birthday:string;
  address:string;

}

export const FormOrganizationSchema: ZodType<FormDataOrganization> = z.object({
  mail: z.string().email({message: 'Correo invalido'}),
  password: z.string().min(8, {message:"La contraseña es muy corta"}).max(20,  {message:"La contraseña es muy larga"}),
  cedula: z.number({invalid_type_error: 'La cedula es requerida y tienen que ser numeros'}).min(8,{message:'La cedula debe de contener al menos 8 digitos'}),
  name: z.string({required_error: "El nombre es requerido"}).min(3, {message: "El nombre debe de tener al menos 3 digitos"}),
  address:z.string({required_error: "La direccion de la persona es requerida"}).min(5, {message: "La direccion es requerida y tiene que tener minimo 5 digitos"}),
  bankaccount: z.number({invalid_type_error: 'La cuenta bancaria es requerida y tienen que ser numeros'}).min(10, {message: 'La cuenta bancaria debe contener mas digitos'})
  
})

export type FormDataOrganization = {
  mail:string;
  password:string;
  cedula:number;
  name:string;
  address:string;
  bankaccount:number;
}