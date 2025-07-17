# API Loja de Games - APS

## Descrição

Esta API faz parte do sistema de Loja de Games, desenvolvido para a disciplina Web III.  
O projeto utiliza **NestJS** no back-end, **Prisma ORM** para integração com banco de dados relacional (MySQL) e segue arquitetura RESTful.  
Permite o cadastro, edição, exclusão e consulta de jogos, plataformas e gêneros.

---

## Entidades do Banco de Dados

- **Jogo**: id, nome, plataformaId, generoId
- **Plataforma**: id, nome
- **Gênero**: id, nome

As entidades estão relacionadas por chaves estrangeiras (um jogo pertence a uma plataforma e a um gênero).

---

## Tecnologias Utilizadas

- **Back-end:** NestJS, Prisma ORM, MySQL
- **Outros:** TypeScript

---

## Como Executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o banco de dados

- Crie um banco MySQL chamado `loja_games`.
- Configure a variável `DATABASE_URL` no arquivo `.env`:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/loja_games"
```

### 3. Rode as migrations do Prisma

```bash
npx prisma migrate dev --name init
```

### 4. Inicie o servidor

```bash
npm run start:dev
```
A API ficará disponível em `http://localhost:4000`.

---

## Endpoints Principais

- `GET /jogos` — Lista todos os jogos (com filtro por plataformaId e generoId)
- `GET /jogos/:id` — Detalhes de um jogo
- `GET /plataformas` — Lista todas as plataformas
- `GET /plataformas/:id` — Detalhes de uma plataforma
- `GET /generos` — Lista todos os gêneros
- `GET /generos/:id` — Detalhes de um gênero

Também disponíveis: POST, PATCH, DELETE para cada entidade.

---

## Estrutura de Pastas

```
src/
  ├─ jogos/
  ├─ plataformas/
  ├─ generos/
  ├─ prisma.service.ts
  ├─ prisma.module.ts
  └─ main.ts
prisma/
  └─ schema.prisma
```

---

## Observações

- O projeto utiliza CORS habilitado para integração com o front-end.
- O Prisma Studio pode ser usado para inserir dados manualmente:  
  ```bash
  npx prisma studio
  ```
- As relações entre tabelas são garantidas pelo Prisma e pelo banco de dados.

---

## Autor

- Luan Eduardo Treuke
