import styles from './List.module.css';
import { ClipboardText, Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ListProps {
  tasks?: Task[];
  setTasks: (tasks: Task[]) => void;
}

export function List({ tasks = [], setTasks }: ListProps) {
  function handleToggleTask(taskId:number, checked:boolean) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: checked } : task));
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return tasks.length === 0
    ? (
      <div className={styles.wrapperEmpty}>
        <ClipboardText className={styles.icon} size={56}/>
        <p className={styles.bold} >Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
    : (
      <div className={styles.wrapperContent}>
        {
          tasks.map(task => (
            <div key={task.id} className={styles.taskWrapper}>
              <input key={task.id} type='checkbox' checked={task.completed} onChange={(event: ChangeEvent<HTMLInputElement>) =>{ handleToggleTask(task.id, event.target.checked); }}/>
              <p className={styles.taskText}>{task.text}</p>
              <Trash className={styles.trashIcon} size={24} onClick={() => { handleDeleteTask(task.id); }} />
            </div>
          ))
        }
      </div>
    );
};
