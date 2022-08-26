import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const seedDb = async () => {
  const prisma = new PrismaClient();

  const main = async () => {
    // categories
    Array.from(Array(6), (_, i) => i + i).map(async (idCategory) => {
      await prisma.category.upsert({
        where: { id: idCategory },
        update: {},
        create: {
          id: idCategory,
          name: faker.commerce.department(),
        },
      });

      // Products for category
      Array.from(Array(random(2, 50)), (_, i) => i + i).map(
        async (idProduct) => {
          await prisma.product.upsert({
            where: { id: idProduct },
            update: {},
            create: {
              id: idProduct,
              name: faker.commerce.productName(),
              description: faker.commerce.productDescription(),
              image: faker.image.image(200, 200, true),
              price: faker.commerce.price(),
              idCategory,
            },
          });
        }
      );
    });
  };

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

seedDb();
