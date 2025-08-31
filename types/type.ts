import {z} from 'zod';
import { InsertProductSchema } from "@/lib/validator";

export type Product = z.infer<typeof InsertProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
    
}