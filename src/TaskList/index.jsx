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
			<div>
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