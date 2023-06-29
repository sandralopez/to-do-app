import { CheckIcon } from '@heroicons/react/24/solid'

function CompleteTaskButton({ onComplete }) {
	return (
		<div className="cursor-pointer w-13 h-13 backdrop bg-white bg-opacity-10 border border-white px-3 py-1.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-40 hover:bg-opacity-50" onClick={ onComplete }>
			<CheckIcon className="h-6 w-6 text-green-600" />
		</div>
	)
}

export { CompleteTaskButton };