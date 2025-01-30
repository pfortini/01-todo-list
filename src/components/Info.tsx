import styles from './Info.module.css';
import { Task } from './List';

interface InfoProps {
  tasks: Task[]
}

export function Info({ tasks }: InfoProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.created}>
        <p className={styles.createdText}>Tarefas Criadas</p>
        <p className={styles.createdCount}>{tasks?.length || 0}</p>
      </div>

      <div className={styles.finished}>
        <p className={styles.finishedText}>Concluidas</p>
        <p className={styles.finishedCount}>
          {tasks.filter(task => task.completed).length}{tasks?.length ? ` de ${tasks.length}` : ''}
        </p>
      </div>

    </div>
  );
}
