# Panorama
Portal para descoberta e divulgação de negócios e serviços. Stack: Next.js, Node.js (APIs serverless), PostgreSQL (Prisma), Tailwind, Vercel.

## Rodando localmente
1) cp .env.example .env
2) Configure DATABASE_URL, JWT_SECRET e Cloudinary
3) npm install
4) npm run prisma:generate
5) npm run prisma:migrate
6) npm run seed
7) npm run devgit push -u origin main
