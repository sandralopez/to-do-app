import { useState } from 'react';
import { TaskProvider } from '../TaskContext';
import { TaskLists } from '../TaskLists';
import { TaskList } from '../TaskList';
import { Container } from '../Container';
import { CreateTaskListButton } from '../CreateTaskListButton';
import { CreateTaskButton } from '../CreateTaskButton';
import { CreateTaskListForm } from '../CreateTaskListForm';
import { Modal } from '../Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TaskProvider>
        <Container>
          <TaskLists>
            <CreateTaskListButton setOpenModal={setOpenModal} />
          </TaskLists>
          <TaskList>
            <span className="text-lg font-semibold text-center mb-20">Tasks</span>
            <CreateTaskButton />
          </TaskList>
        </Container>
        {openModal && (
          <Modal>
           <CreateTaskListForm setOpenModal={setOpenModal} />
          </Modal>
        )}
      </TaskProvider>
    </>
  )
}

export { App };