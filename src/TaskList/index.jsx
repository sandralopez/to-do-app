import { useContext } from 'react'
import { TaskContext } from '../TaskContext'
import { Task } from '../Task';

function TaskList( { children }) {
	const {
		data,
		taskList,
		completeTask,
		deleteTask,
	} = useContext(TaskContext);

	const renderView = () => {
		if (taskList.tasks?.length > 0) {
			return (
				<>
					<ul>
						{
							taskList.tasks?.map((task) => 
								<Task 
									key={task.id} 
									id={task.id}
									description={task.description} 
									isDone={task.isDone}
									onComplete={ () => completeTask(task.id) } 
									onDelete={ () => deleteTask(task.id) } />
							)
						}
					</ul>
				</>
			)
		}
		else {
			return (
				<p className="w-full flex justify-center">
					<span className="text-lg font-medium font-bold">Create your first task!</span>
				</p>
			)
		}
	}

	if (Object.keys(taskList).length != 0) {
		return (
			<div className="flex flex-col mr-8 p-8 drop-shadow-xl z-10 backdrop w-full h-full bg-white bg-opacity-25 rounded-2xl p-3 text-gray-800 shadow-xl">
				{ children }
				<span className="text-lg font-medium">Deadline: {taskList.limit_date}</span>
				<span className="text-lg font-light mb-4">Description: {taskList.description}</span>
				{ renderView() }
			</div>
		)
	}
	else {
		return null;
	}
}

export { TaskList };