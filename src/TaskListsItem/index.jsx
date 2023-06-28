import { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import { DeleteTaskListButton } from '../DeleteTaskListButton';

function TaskListsItem(props) {
	const {
		showTaskList,
	} = useContext(TaskContext);

	return (
		<div>
			<div onClick={() => showTaskList(props.id)}>
				<h1>List: {props.name}, Limit date: {props.limitDate}</h1>
			</div>
			<DeleteTaskListButton 
				onDelete={ props.onDelete } 
			/>
		</div>
	)
}

export { TaskListsItem };