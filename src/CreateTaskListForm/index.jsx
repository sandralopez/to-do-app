import { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext';

function CreateTaskListForm( { setOpenModal, addTodo }) {
  const context = useContext(TaskContext);

  const [formData, setFormData] = useState({
      name: "",
      description: "",
      limit_date: "",
  });

  const onSubmit = (event) => {
      event.preventDefault();
      context.createTaskList(formData);
      setOpenModal(false);
  };

  const onCancel = (event) => {
      setOpenModal(false);
  };

  const handleChange = (event) => {
	setFormData({
	  ...formData,
	  [event.target.name]: event.target.value,
	});
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center z-20 bg-white p-10 w-auto rounded-lg">
      <label className="mb-5 font-medium font-bold">Create a new task list</label>
      <input 
        id="name"
        name="name"
      	type="text"
        placeholder="Name"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={handleChange}
      />
       <input 
        id="description"
        name="description"
       	type="text"
        placeholder="Description"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={handleChange}
      />
        <input 
        id="limit_date"
        name="limit_date"
        tyoe="date"
        placeholder="Deadline"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={handleChange}
      />
      <div className="flex flex-row justify-center items-center gap-4 w-80">
        <button
          type="button"
          className="bg-white border border-[#a2898a] py-3 text-black w-80 rounded-lg cursor-pointer"
          onClick={onCancel}>
          Cancel
        </button>
        <button
        	className="bg-[#a2898a] border border-[#a2898a] py-3 text-white w-80 rounded-lg cursor-pointer"
          	type="submit"
         >
          Add
        </button>
      </div>
    </form>
  );
}

export { CreateTaskListForm };