import { useState } from 'react';
import { TaskProvider } from '../TaskContext';
import { TaskLists } from '../TaskLists';
import { TaskList } from '../TaskList';
import { Container } from '../Container';
import { CreateTaskListButton } from '../CreateTaskListButton';
import { CreateTaskButton } from '../CreateTaskButton';
import { CreateTaskListForm } from '../CreateTaskListForm';
import { CreateTaskForm } from '../CreateTaskForm';
import { Modal } from '../Modal';

function App() {
  const [openTaskListModal, setOpenTaskListModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  return (
    <>
      <TaskProvider>
        <Container>
          <TaskLists>
            <CreateTaskListButton setOpenTaskListModal={setOpenTaskListModal} />
          </TaskLists>
          <TaskList setOpenTaskModal={setOpenTaskModal}>
            <span className="text-lg font-semibold text-center mb-20">Tasks</span>
            <CreateTaskButton setOpenTaskModal={setOpenTaskModal} />
          </TaskList>
        </Container>
        {openTaskListModal && (
          <Modal>
           <CreateTaskListForm setOpenTaskListModal={setOpenTaskListModal} />
          </Modal>
        )}
        {openTaskModal && (
          <Modal>
           <CreateTaskForm setOpenTaskModal={setOpenTaskModal} />
          </Modal>
        )}
      </TaskProvider>
    </>
  )
}

export { App };