import { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import { DeleteTaskListButton } from '../DeleteTaskListButton';

function TaskListsItem(props) {
	const {
		taskList,
		showTaskList,
	} = useContext(TaskContext);

	return (
		<div className={`cursor-pointer items-center drop-shadow-xl z-10 backdrop w-full h-32 bg-white ${props.id === taskList.id ? "bg-opacity-60" : "bg-opacity-40" } rounded-2xl p-3 text-gray-800 shadow-xl mb-10 flex`} onClick={() => showTaskList(props.id)} >
			<div className="flex flex-col w-full ml-5 mr-5">
				<span className="font-medium text-md">{props.name}</span>
				<span className="font-medium text-md">Limit date: {props.limitDate}</span>
			</div>
			<DeleteTaskListButton 
				onDelete={ props.onDelete } 
			/>
		</div>
	)
}

export { TaskListsItem };