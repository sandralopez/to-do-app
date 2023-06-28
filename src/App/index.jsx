import { TaskContext, TaskProvider } from '../TaskContext';
import { TaskLists } from '../TaskLists';
import { TaskList } from '../TaskList';
import { Container } from '../Container';

function App() {
  return (
    <>
      <TaskProvider>
        <Container>
          <TaskLists />
          <TaskList  />
        </Container>
      </TaskProvider>
    </>
  )
}

export { App };