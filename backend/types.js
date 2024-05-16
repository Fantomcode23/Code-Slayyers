// Define your input validation schemas here
const zod=require("zod");

const donorSchema=zod.object({
    name:zod.string(),
    email:zod.string(),
    password:zod.number()
})


const recipientSchema=zod.object({
    name:zod.string(),
    email:zod.string(),
    password:zod.number(),
    phoneNumber:zod.number()
})