import {Header} from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {   
    return (
        <Div>
          <Header />

          <div className={styles.wrapper}>
            <Sidebar />
            <main>
            <Post 
          author="Gustavo Mathias"
          content="LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Post
          author="Fernando"
          content="LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
            </main>
          </div>
        </Div>
    )
}

export default App