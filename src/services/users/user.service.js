import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = prisma.user;

export default {
  getList: async () => {
    return users.findMany();
  },
  getOne: async (id) => {
    return users.findOne({
      where: {
        id,
      },
    });
  },
  delete: async (id) => {
    return users.delete({
      where: {
        id,
      },
    });
  },
  create: async (data) => {
    return users.create({
      data
    });
  },
  createMany: async (data) => {
    return users.createMany({
      data
    });
  },
  update: async (id, data) => {
    return users.update({
      where: {
        id,
      },
      data,
    });
  },
};
