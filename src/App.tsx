import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import { List, Task } from './components/List';

import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 6,  text: 'asdf', completed: false },
    { id: 1,  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 2,  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 3,  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 4,  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: true },
    { id: 5,  text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: true }
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
