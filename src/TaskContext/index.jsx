import { createContext, useState } from 'react';

const TaskContext = createContext();

function TaskProvider({ children }) {

const tasks = [
    {
      "id" : 1,
      "name": "A task list",
      "limit_date": "09/07/2023",
      "tasks": [
        {
          "id": 1,
          "description": "task 1",
          "isDone": false,
        },
        {
          "id": 2,
          "description": "task 2",
          "isDone": false,
        },
        {
          "id": 3,
          "description": "task 3",
          "isDone": false
        },
      ],
    },
    {
      "id" : 2,
      "name": "Another list",
      "limit_date": "01/07/2023",
      "tasks": [
        {
          "id": 1,
          "description": "task 4",
          "isDone": false,
        },
        {
          "id": 2,
          "description": "task 5",
          "isDone": false,
        },
        {
          "id": 3,
          "description": "task 6",
          "isDone": false,
        },
      ],
    },
    {
      "id" : 3,
      "name": "Other list",
      "limit_date": "01/07/2023",
      "tasks": [
        {
          "id": 1,
          "description": "task 7",
          "isDone": false,
        },
        {
          "id": 2,
          "description": "task 8",
          "isDone": false,
        },
        {
          "id": 3,
          "description": "task 9",
          "isDone": false,
        },
      ]
    }
  ];

	const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState({});
  const [isTaskDone, setIsTaskDone] = useState(false);
  const [hasTasks,setHasTasks] = useState(false);

	/* const createTask = (task) => {

	} */

	const completeTask = (id) => {
    console.log('completeTask id: ', id);
	}

	const deleteTask = (id) => {
    console.log('deleteTask id:', id);
	}

  /*
	const updateTask = (task) => {
    console.log('updateTask');
	}

	const createTaskList = (taskList) => {
    console.log('createTaskList');
	} */

	/* const updateTaskList = (taskList) => {
    console.log('updateTaskList');
	} */

  const deleteTaskList = (id) => {
    console.log('deleteTaskList id: ', id);
  }

	const showTaskList = (taskListId) => {
    const t = tasks.find((list) => list.id==taskListId);

    setTaskList(t);

    if (t.tasks.length > 0) {
      setHasTasks(true);
    } else {
      setHasTasks(false);
    }
	}

	return (
		<TaskContext.Provider 
			value={{
				tasks,
        completeTask,
        deleteTask,
        deleteTaskList,
				showTaskList,
        task,
        setTask,
        taskList,
        setTaskList,
        isTaskDone,
        setIsTaskDone,
        hasTasks,
        setHasTasks,
        /*createTask,
        updateTask,
        createTaskList,
        updateTaskList,*/
			}}>
			{children}
		</TaskContext.Provider>
	)
} 

export { TaskContext, TaskProvider };