'use server';

import {prisma} from '@/db/prisma';
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get Latest Products
export async function GetLatestProduct(){

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt: 'desc'}
    });

    return convertToPlainObject(data);
}

