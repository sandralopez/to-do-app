import { useContext } from 'react'
import { TaskContext } from '../TaskContext'
import { Task } from '../Task';

function TaskList() {
	const context = useContext(TaskContext);

	if (context.hasTasks) {
		return (
			<ul>
				{
					context.taskList.tasks.map((task) => 
						<Task key={task.id} description={task.description}></Task>
					)
				}
			</ul>
		)
	}
}

export { TaskList };