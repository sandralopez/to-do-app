import { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import { CompleteTaskButton } from '../CompleteTaskButton';
import { DeleteTaskButton } from '../DeleteTaskButton';

function Task(props) {
	return (
		<div className="items-center drop-shadow-xl z-10 backdrop w-full h-32 bg-white bg-opacity-40 rounded-2xl p-3 text-gray-800 shadow-xl mb-10 flex">
			<CompleteTaskButton onComplete={ props.onComplete } />
			<span className="font-light text-md w-full ml-5 mr-5">{props.description}</span>
			<DeleteTaskButton onDelete={ props.onDelete }/>
		</div>
	)
}

export { Task };