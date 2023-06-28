import React from 'react';
import { TaskListsItem } from '../TaskListsItem';
import { TaskContext } from '../TaskContext';

function TaskLists() {
	const {
		tasks,
		deleteTaskList,
	} = React.useContext(TaskContext);

	return (
		<div className="flex flex-col mr-8">
	        {tasks.map(item => (
	          	<TaskListsItem 
	          		key={item.id}
	          		id={item.id}
	          		name={item.name}
	          		limitDate={item.limit_date}
	          		onDelete={() => deleteTaskList(item.id) }
	          	>
	          	</TaskListsItem>
	        ))}
	    </div>
	)
}

export { TaskLists };