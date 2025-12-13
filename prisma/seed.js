import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const cats = [
    { name: 'Comida', slug: 'comida' },
    { name: 'Beleza', slug: 'beleza' },
    { name: 'Serviços', slug: 'servicos' },
    { name: 'Aulas', slug: 'aulas' },
    { name: 'Produtos', slug: 'produtos' },
    { name: 'Delivery', slug: 'delivery' },
  ];
  for (const c of cats) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }
  console.log('Categorias semeadas.');
}
main().finally(() => prisma.$disconnect());