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

/////////////////////////////////////////////       VOLUNTEERING  ////////////////////////////////////////////////

export const FormVolunteeringSchema: ZodType<FormDataVolunteering> = z.object({
  projectName: z.string({
    required_error: "El nombre del proyecto es requerido"
  }).min(3, { message: "El nombre del proyecto debe tener al menos 3 caracteres" }),
  
  startDate: z.string({
    required_error: "La fecha de inicio es requerida"
  }).refine(val => !isNaN(Date.parse(val)), { message: "La fecha de inicio no es válida" }),
  
  finishDate: z.string({
    required_error: "La fecha de finalización es requerida"
  }).refine(val => !isNaN(Date.parse(val)), { message: "La fecha de finalización no es válida" }),
  
  category: z.string({
    required_error: "La categoría es requerida"
  }),
  
  quotas: z.number({
    required_error: "Las cuotas son requeridas"
  }).min(1, { message: "Las cuotas deben ser al menos 1" }),
  
  description: z.string({
    required_error: "La descripción es requerida"
  }).min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  
  requirements: z.string({
    required_error: "Los requisitos son requeridos"
  }).min(10, { message: "Los requisitos deben tener al menos 10 caracteres" }),
  
  contact: z.string({
    required_error: "El contacto es requerido"
  }).email({ message: "El contacto no es un correo válido" }),
  
  organizationId: z.number({
    required_error: "El ID de la organización es requerido"
  }).positive({ message: "El ID de la organización debe ser un número positivo" })
});

export type FormDataVolunteering = {
  projectName: string;
  startDate: string;
  finishDate: string;
  category: string;
  quotas: number;
  description: string;
  requirements: string;
  contact: string;
  organizationId: number;
}

/////////////////////////////////////////////       EVENT  ////////////////////////////////////////////////

export const FormEventSchema: ZodType<FormDataEvent> = z.object({
  name: z.string({
    required_error: "El nombre es requerido"
  }).min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  
  description: z.string({
    required_error: "La descripción es requerida"
  }).min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  
  date: z.string({
    required_error: "La fecha es requerida"
  }).refine(val => !isNaN(Date.parse(val)), { message: "La fecha no es válida" }),
  
  address: z.string({
    required_error: "La dirección es requerida"
  }).min(5, { message: "La dirección debe tener al menos 5 caracteres" }),
  
  category: z.string({
    required_error: "La categoría es requerida"
  }),
  
  quota: z.number({
    required_error: "La cuota es requerida"
  }).min(1, { message: "La cuota debe ser al menos 1" }),
  
  contact: z.string({
    required_error: "El contacto es requerido"
  }).email({ message: "El contacto no es un correo válido" }),
  
  organizationId: z.number({
    required_error: "El ID de la organización es requerido"
  }).positive({ message: "El ID de la organización debe ser un número positivo" })
});

export type FormDataEvent = {
  name: string;
  description: string;
  date: string;
  address: string;
  category: string;
  quota: number;
  contact: string;
  organizationId: number;
}
