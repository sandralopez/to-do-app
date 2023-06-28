import { CompleteTaskButton } from '../CompleteTaskButton';
import { DeleteTaskButton } from '../DeleteTaskButton';

function Task(props) {
	return (
		<div>
			<CompleteTaskButton />
			<h1>{props.description}</h1>
			<DeleteTaskButton />
		</div>
	)
}

export { Task };