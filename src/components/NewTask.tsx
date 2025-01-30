import { ChangeEvent, useState } from 'react';
import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { Task } from './List';

interface NewTaskProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export function NewTask({ tasks, setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleTypeTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    const maxId = Math.max(...tasks.map(task => task.id));
    setTasks([{ text: newTask, completed: false, id: maxId + 1 }, ...tasks]);
    setNewTask('');
  }

  return (
    <div className={styles.wrapper}>
      <input type='text' placeholder="Adicione uma nova tarefa" className={styles.input} onChange={handleTypeTask}/>

      <a href='#' onClick={handleAddTask}>
        Criar
        <PlusCircle size={16}/>
      </a>
    </div>
  );
}
