import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Elias-FS.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elias Fausto</strong>
              <time title="28 de Abril às 17:15" dateTime="2023-04-28 17:15:30">
                cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
