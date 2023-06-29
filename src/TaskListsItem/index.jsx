import { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import { DeleteTaskListButton } from '../DeleteTaskListButton';

function TaskListsItem(props) {
	const {
		showTaskList,
	} = useContext(TaskContext);

	return (
		<div className="items-center drop-shadow-xl z-10 backdrop w-full h-32 bg-white bg-opacity-40 rounded-2xl p-3 text-gray-800 shadow-xl mb-10 flex">
			<div className="flex flex-col w-full ml-5 mr-5" onClick={() => showTaskList(props.id)}>
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