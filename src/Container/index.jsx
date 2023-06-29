import './styles.css';

function Container({children}) {
	return (
		<div>
			<div className="top-2.5 left-56 h-20 w-20 rounded-full absolute glass"></div>
			<div className="-top-9 right-20 h-56 w-56 rounded-full absolute glass"></div>
			<div className="-top-10 right-72 h-14 w-14 rounded-full absolute glass"></div>
			<div className="bottom-9 left-9 h-10 w-10 rounded-full absolute glass"></div>
			<div className="h-screen grid m-0 place-items-center p-8 overflow-hidden overflow-y-auto">
				<div className="grid h-full w-4/5 gap-5 grid-cols-2 box-border p-6 drop-shadow-xl z-10 backdrop bg-white bg-opacity-25 rounded-2xl p-3 text-gray-800 shadow-xl">
					{children}
				</div>
			</div>
		</div>
	)
}

export { Container }