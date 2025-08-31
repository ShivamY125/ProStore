import {z} from "zod";
import { formatNumber } from "./utils";
// Schema for inserting product.

export const InsertProductSchema = z.object({
    name: z.string().min(3, "Name should be atleast 3 characters"),
    slug: z.string().min(3, "Slug should be atleast 3 characters"),
    category: z.string().min(3, "Category should be atleast 3 characters"),
    brand: z.string().min(3, "Brand should be atleast 3 characters"),
    description: z.string().min(3, "Description should be atleast 3 characters"),
    stock: z.coerce.number(),  // Use of this coerce function it converts the stock in its proper type beofre throwing error,
    images: z.array(z.string().min(1, "Product must have atleast one image").max(5, "Product can have max 5 images")),
    isFetured: z.boolean(),
    banner: z.string().nullable(),
    price: z.string().refine((val)=> /^\d+(\.\d(2))?$/.test(formatNumber(Number(val))), 'Price must have exaclty two decimal places').min(0.01, 'Price must be at least 0.01')
});