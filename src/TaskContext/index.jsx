import { createContext, useState } from 'react';
import { useLocalStorage } from'../App/useLocalStorage';

const TaskContext = createContext();

function TaskProvider({ children }) {

/*const tasks = [
    {
      "id" : 1,
      "name": "A task list",
      "description": "Tasks from university",
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
      "description": "Tasks from work",
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
      "description": "Tasks from painting classes",
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
  ]; */

  const [data, saveData] = useLocalStorage('TASKS', []);

  const [taskList, setTaskList] = useState({});

  const [task, setTask] = useState({});

  const createTaskList = (formData) => {
    const maxId = data.reduce((item, current) => item.id > current.id ? item.id + 1 : current.id + 1, 1);
    formData.id = maxId;
    
    formData.tasks = [];

    const newData = [...data, formData];

    saveData(newData);
  }

  const showTaskList = (taskListId) => {
    const list = data?.find((item) => item.id==taskListId);

    setTaskList(list);
  }

  const deleteTaskList = (id) => {
    const newData = [...data];
    const taskListIndex = data?.findIndex(
      (taskList) => id === id
    );

    newData.splice(taskListIndex, 1);
    saveData(newData);
  }

	const completeTask = (id) => {
    const newTaskList = {...taskList};
    const taskIndex = taskList.tasks?.findIndex(
      (task) => task.id === id
    );

    newTaskList.tasks[taskIndex].isDone = true;
    setTaskList(newTaskList);
    saveTaskList(newTaskList);
	}

	const deleteTask = (id) => {
    const newTaskList = {...taskList};
    const taskIndex = taskList.tasks?.findIndex(
      (task) => task.id === id
    );

    newTaskList.tasks?.splice(taskIndex, 1);
    setTaskList(newTaskList);
    saveTaskList(newTaskList);
	}

  const saveTaskList = (taskList) => {
    const newData = [...data];
    const taskListIndex = data.findIndex(
      (list) => list.id === taskList.id
    )

    newData[taskListIndex] = taskList;

    saveData(newData);
  }

  const createTask = (formData) => {
    const newTaskList = {...taskList};
    const newData = [...data];

    const maxId = taskList.tasks.reduce((item, current) => item.id > current.id ? item.id + 1 : current.id + 1, 1);
    formData.id = maxId; 

    newTaskList.tasks = [...newTaskList.tasks, formData];

    const taskListIndex = newData.findIndex(
      (list) => list.id === taskList.id
    )

    newData[taskListIndex] = newTaskList;

    setTaskList(newTaskList);
    setTask(formData);
    saveData(newData);
    }
/*
    const newData = {...taskList, formData};
console.log(newData);
    saveData(newData);
  }*/

  /*
  const createTask = (task) => {
    console.log('createTask');
  } 

	const updateTask = (task) => {
    console.log('updateTask');
	}

	const createTaskList = (taskList) => {
    console.log('createTaskList');
	} */

	/* const updateTaskList = (taskList) => {
    console.log('updateTaskList');
	} */

	return (
		<TaskContext.Provider 
			value={{
        data,
        saveData,
        completeTask,
        deleteTask,
        deleteTaskList,
				showTaskList,
        taskList,
        setTaskList,
        createTaskList,
        task,
        setTask,
        createTask,
			}}>
			{children}
		</TaskContext.Provider>
	)
} 

export { TaskContext, TaskProvider };