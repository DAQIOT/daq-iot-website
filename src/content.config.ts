import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/site' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/solutions' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/services' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const partners = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/partners' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const support = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/support' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const about = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/about' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const contact = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/contact' }),
  schema: z.object({ name: z.string().optional() }).passthrough()
});

const categories = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/categories',
    // 分类 frontmatter 含 slug 字段，默认 generateId 会用 slug 作为 id，
    // 导致 zh/en/de 三语文件 id 冲突。强制用相对路径（语言子目录/文件名）作为 id。
    generateId: ({ entry, base }) => {
      const entryURL = new URL(encodeURI(entry), base);
      const rel = relative(fileURLToPath(base), fileURLToPath(entryURL)).replace(/\\/g, '/');
      return rel.replace(/\.md$/, '');
    }
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    description: z.string().optional().default(''),
    order: z.number().default(0)
  })
});

const products = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional().default(''),
    category: z.string().default('instrumentation'),
    order: z.number().default(0),
    hidden: z.boolean().optional().default(false),
    parameters: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional().default([])
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional()
  })
});

export const collections = {
  site,
  solutions,
  services,
  partners,
  support,
  about,
  contact,
  categories,
  products,
  posts
};
