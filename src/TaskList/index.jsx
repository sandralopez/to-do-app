import { useContext } from 'react'
import { TaskContext } from '../TaskContext'
import { Task } from '../Task';

function TaskList() {
	const {
		taskList,
		hasTasks,
		completeTask,
		deleteTask,
	} = useContext(TaskContext);

	if (hasTasks) {
		return (
			<div className="flex flex-col mr-8 p-8 drop-shadow-xl z-10 backdrop w-full h-full bg-white bg-opacity-25 rounded-2xl p-3 text-gray-800 shadow-xl">
				<span className="text-lg font-semibold text-center mb-2">Tasks</span>
				<span className="text-lg font-medium">Deadline: {taskList.limit_date}</span>
				<span className="text-lg font-light mb-4">Description: {taskList.description}</span>
				<ul>
					{
						taskList.tasks.map((task) => 
							<Task 
								key={task.id} 
								id={task.id}
								description={task.description} 
								onComplete={ () => completeTask(task.id) } 
								onDelete={ () => deleteTask(task.id) } />
						)
					}
				</ul>
			</div>
		)
	}
}

export { TaskList };