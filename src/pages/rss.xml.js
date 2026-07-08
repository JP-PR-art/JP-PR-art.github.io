import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes');
  return rss({
    title: 'JP Perez, notes',
    description: 'Short notes on agentic workflows, MCP, CPQ and selling technical software.',
    site: context.site,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.summary,
      pubDate: n.data.date,
      link: `/notes/${n.id}/`,
    })),
  });
}
