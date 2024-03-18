// pages/index.tsx

import React from 'react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

type BlogPost = {
  id: number;
  title: string;
};

export const loader: LoaderFunction = async () => {
  const response = await fetch('/data/blogPosts.json');
  const posts: BlogPost[] = await response.json();
  return posts;
};

const HomePage: React.FC = () => {
  const posts = useLoaderData<BlogPost[]>();

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
