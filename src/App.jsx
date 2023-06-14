import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publisgedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Elias-FS.png',
      name: 'Elias Fausto',
      role: 'Estagiário Ful Stack @BTG'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat.' },
      { type: 'link', content: 'https://github.com/Elias-FS/IgniteFeed'}
    ],
    publishedAt: new Date('2023-06-13 16:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat.' },
      { type: 'link', content: 'https://github.com/Elias-FS/IgniteFeed'}
    ],
    publishedAt: new Date('2023-06-10 13:50:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
