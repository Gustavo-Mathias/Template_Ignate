import styles from './Post.module.css';
import { Comment } from './Comment';   
import { Avatar } from './Avatar';     

export function Post({ author, content }){
    return (
        <article className={styles.post}>
            <header> 
                <div className={styles.author}>
                    <Avatar src="https://github.com/gustavomathias.png" />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13' dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>{content}</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}