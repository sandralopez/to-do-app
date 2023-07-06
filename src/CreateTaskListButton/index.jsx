function CreateTaskListButton({ setOpenModal }) {
	return (
		<button 
			type="button" 
			className="fixed top-20 right-3 text-white bg-[#94AF9F] border border-[#94AF9F] rounded-xl p-2"
			onClick={
	          () => {
	            setOpenModal(state => !state);
	          }
	      	}
		>
			New List
		</button>
	)
}

export { CreateTaskListButton };