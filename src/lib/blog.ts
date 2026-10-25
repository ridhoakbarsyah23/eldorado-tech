import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  contentHtml: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const slug = file.replace(/\.md$/, '');
        return await getPostBySlug(slug);
      })
  );
  
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const contentHtml = await marked.parse(content);

    // Format date string safely whether it comes as Date object or string from gray-matter
    const dateStr = data.date instanceof Date 
      ? data.date.toISOString().split('T')[0] 
      : (data.date ? new Date(data.date).toISOString().split('T')[0] : '');

    return {
      slug,
      title: data.title || '',
      date: dateStr,
      description: data.excerpt || data.description || '',
      author: data.author || 'Tim Eldorado Tech',
      contentHtml,
    };
  } catch {
    return null;
  }
}
