'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import contentData from '~/data/content.json';
import { FadeIn } from '~/lib/animations';
import { Suspense } from 'react';

interface ContentItem {
  title: string;
  src: string;
  creator: string;
}

interface ContentData {
  games: Record<string, ContentItem>;
  movies: Record<string, ContentItem>;
  books: Record<string, ContentItem>;
  apps: Record<string, ContentItem>;
}
const ContentPageContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const item = searchParams.get('item');
  
  const [contentItem, setContentItem] = useState<ContentItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category || !item) {
      setError('Category and item parameters are required');
      return;
    }

    try {
      // Check if category exists
      if (!['games', 'movies', 'books', 'apps'].includes(category)) {
        setError(`Category '${category}' not found`);
        return;
      }

      const categoryItems = (contentData as unknown as ContentData)[category as keyof ContentData];
      
      // Find the item by normalized title
      const foundItem = Object.values(categoryItems).find(contentItem => {
        const normalizedTitle = contentItem.title.toLowerCase().replace(/\s+/g, '');
        return normalizedTitle === item.toLowerCase();
      });

      if (foundItem) {
        setContentItem(foundItem);
        setError(null);
      } else {
        setError(`Item '${item}' not found in category '${category}'`);
      }
    } catch (err) {
      setError('Error loading content');
      console.error(err);
    }
  }, [category, item]);

  if (error) {
    return (
      <FadeIn>
        <h1 className="text-center text-xl">Error</h1>
        <p className="text-center">{error}</p>
      </FadeIn>
    );
  }

  if (!contentItem) {
    return(
      <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  const fullscreen = () => {
    const win: any = window.open();
    const embed: any = win.document.createElement('embed');
    const body: any = win.document.body;
    body.style.margin = "0";
    body.style.overflow = "hidden";
    body.style.backgroundColor = "black";
    embed.style.width = "100vw";
    embed.style.height = "100vh";
    embed.style.border = "none";
    embed.src = contentItem.src;
    win.document.body.appendChild(embed);
  }

  return (
    <FadeIn>
      <h1 className="font-header text-center text-4xl mb-10">{contentItem.title}</h1>
      <p className="text-left absolute top-[22vh] w-screeen">Created by: {contentItem.creator}</p>
      <button onClick={fullscreen} className="cursor-pointer hover:scale-[1.05] absolute right-[0] hover:right-[0.3vw] top-[22vh]">Fullscreen</button>
      <embed className="w-screen h-screen" src={contentItem.src}></embed>
    </FadeIn>
  );
}
export default function ContentPage(){
  return(
    <Suspense fallback={<p>Loading...</p>}>
      <ContentPageContent />
    </Suspense>
  );
}
