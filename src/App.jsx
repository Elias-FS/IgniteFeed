import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          <Post 
            author="Elias Fausto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores impedit ab. Eum voluptas labore eius impedit nulla quaerat sed velit? Suscipit pariatur magni tenetur, eaque neque unde fugit reiciendis."
          />
          <Post 
            author="Jonas Fausto"
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </div>
  );
}
