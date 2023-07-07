function CreateTaskButton({ setOpenTaskModal }) {
	return (
		<button 
			type="button" 
			className="fixed top-20 text-white bg-[#94AF9F] border border-[#94AF9F] rounded-xl p-2 right-3"
			onClick={
	          () => {
	            setOpenTaskModal(state => !state);
	          }
	      	}
		>
			New Task
		</button>
	)
}

export { CreateTaskButton };