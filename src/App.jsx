import { FormLab } from 'asura-forms';

function App() {
	return (
		<div className='demo'>
			<h1 className='demo__title'>Asura Forms</h1>
			<p className='demo__desc'>
				Asura Forms is a lightweight, customizable React library that lets developers visually build dynamic
				forms using an intuitive drag-and-drop interface. Designed with flexibility and developer experience in
				mind, it supports nested layouts, real-time previews, and styled components — all while keeping your
				codebase clean and extensible.
			</p>
			<div className='demo__form'>
				<FormLab
					onSave={data => {
						console.log(data);
						alert('Check the form data object on console.');
					}}
				/>
			</div>
		</div>
	);
}

export default App;
