import { TaskContext, TaskProvider } from '../TaskContext';
import { TaskLists } from '../TaskLists';
import { TaskList } from '../TaskList';

function App() {
  return (
    <>
      <TaskProvider>
        <TaskLists />
        <TaskList />
      </TaskProvider>
    </>
  )
}

export { App };