import React from 'react';
import { TaskListsItem } from '../TaskListsItem';
import { TaskContext } from '../TaskContext';
import { CreateTaskListButton } from '../CreateTaskListButton';

function TaskLists({ children }) {
	const {
		data,
		deleteTaskList,
	} = React.useContext(TaskContext);

	return (
		<div className="flex flex-col mr-8 p-8 drop-shadow-xl z-10 backdrop w-full h-full bg-white bg-opacity-25 rounded-2xl p-3 text-gray-800 shadow-xl">
	        <span className="text-lg font-semibold text-center mb-20">Task lists</span>
	        { children }
	        {data?.map(item => (
	          	<TaskListsItem 
	          		key={item.id}
	          		id={item.id}
	          		name={item.name}
	          		description={item.description}
	          		limitDate={item.limit_date}
	          		onDelete={() => deleteTaskList(item.id) }
	          	>
	          	</TaskListsItem>
	        ))}
	    </div>
	)
}

export { TaskLists };