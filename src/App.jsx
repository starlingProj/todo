
import ListItem from "./components/ListItem";
import React from "react";

function App() {
	const [tasks, setTask] = React.useState([	])

	const [text, setText] = React.useState('')

	const handleOnChange = (e) => {

		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		addTask(text)
		setText('');
	}

	const addTask = (text) => {
		if (text) {
			const newItem = {
				task: text,
				completed: false
			};
			setTask([...tasks, newItem])
		}

	}
		const completeTask=(id)=>{
      setTask(prevTasks=>{
				return prevTasks.map((task,curIdx)=>{
					if(id===curIdx){
						return{
							...task,
							completed: !task.completed
						}
					}
					return task
				})
			})
		}
		const removeTask=(id)=>{
			setTask(tasks.filter((_,curIdx)=> curIdx!==id))
		}
		
		const handleEnterChange=(event)=>{
			if(event.keyCode===13){
				addTask(text);
				setText('');
			}
		}

	return (
		<div className="todo">
			<div className="todo__name">
				<h4>Список завдань</h4>
			</div>
			<div className="todo__add-todoes">
				<input
					onKeyUp={handleEnterChange}
					value={text}
					onChange={(e) => handleOnChange(e)}
					type="text"
					placeholder="Введіть назву завдання" />
				<div
					onClick={(e) => handleSubmit(e)}
					
					className="todo__add-todoes-icon">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
						x="0px" y="0px" width="45.402px" height="45.402px" viewBox="0 0 45.402 45.402"
					>

						<path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
						c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
						c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
						c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z" />
					</svg>
				</div>
			</div>
			{
				tasks && tasks.map((obj, index) => (
					<ListItem
						name={obj.task}
						id={index}
						completed={obj.completed}
						key={index}
						completeTask={completeTask}
						removeTask={removeTask} />
				))
			}

		</div>

	);
}

export default App;
