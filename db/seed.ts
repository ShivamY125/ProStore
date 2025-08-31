import {PrismaClient } from "@prisma/client";
import { SampleData } from "./sample-data";

async function Main(){
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({data: SampleData.products});

  console.log("DB seeded succesfully!");
}

Main();