import React from 'react';
import { TaskListsItem } from '../TaskListsItem';
import { TaskContext } from '../TaskContext';

function TaskLists() {
	const context = React.useContext(TaskContext);

	return (
		<div>
	        {context.tasks.map(item => (
	          	<TaskListsItem 
	          		key={item.id}
	          		id={item.id}
	          		name={item.name}
	          		limitDate={item.limit_date}
	          	>
	          	</TaskListsItem>
	        ))}
	    </div>
	)
}

export { TaskLists };