import { useContext } from 'react';
import { TaskContext } from '../TaskContext';

function TaskListsItem(props) {
	const context = useContext(TaskContext);

	return (
		<div onClick={() => context.showTaskList(props.id)}>
			<h1>List: {props.name}, Limit date: {props.limitDate}</h1>
		</div>
	)
}

export { TaskListsItem };