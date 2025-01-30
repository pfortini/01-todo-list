import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { List, Task } from './components/List';

import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Planejar escopo e definir objetivos do projeto.', completed: true },
    { id: 2, text: 'Criar um cronograma detalhado com prazos e responsáveis.', completed: true },
    { id: 3, text: 'Desenvolver e testar as principais funcionalidades.', completed: true },
    { id: 4, text: 'Revisar e corrigir eventuais problemas identificados.', completed: false },
    { id: 5, text: 'Finalizar documentação e realizar entrega oficial.', completed: false }
  ]);

  function _setTasks(tasks: Task[]) {
    setTasks(tasks);
  }

  return (
    <>
      <Header />
      <NewTask tasks={tasks} setTasks={_setTasks} />

      <div className={styles.main}>
        <Info tasks={tasks} />
        <List tasks={tasks} setTasks={_setTasks} />
      </div>
    </>
  );
}

export default App;
