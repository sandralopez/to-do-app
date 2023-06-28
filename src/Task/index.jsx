import { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import { CompleteTaskButton } from '../CompleteTaskButton';
import { DeleteTaskButton } from '../DeleteTaskButton';

function Task(props) {
	return (
		<div className="flex flex-col mb-4">
			<CompleteTaskButton onComplete={ props.onComplete } />
			<h1>{props.description}</h1>
			<DeleteTaskButton onDelete={ props.onDelete }/>
		</div>
	)
}

export { Task };