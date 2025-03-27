import styles from './Comment.module.css';
import { ThumbsUp } from 'phosphor-react';


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/gustavomathias.png" alt="Gustavo Mathias" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <strong>Gustavo Mathias</strong>
                        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                    </header>
                    <p>Muito bom dev, parabens!</p>
                </div>

                <footer>    
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}