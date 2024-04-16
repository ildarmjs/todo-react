import { useState } from "react"
import { dataTasks } from "../data_tasks/data.tasks"
import { ITask } from "../interfaces/task.interfaces"

export const useTodos = () => {
	const [tasks, setTasks] = useState<ITask[]>(dataTasks)
	const [filter, setFilter] = useState<string>('All')
	const [inputValue, setInputValue] = useState('')

	const addTask = (title: string) => {
		const newTask: ITask = { id: new Date().getTime(), title, status: false }
		setTasks([...tasks, newTask])
		setInputValue('')
	}

	const changeStatus = (id: number, status: boolean) => {
		const updatedTasks = tasks.map(task =>
			task.id === id ? { ...task, status } : task
		)
		setTasks(updatedTasks)
	}

	const clearCompleted = () => {
		const remainingTasks = tasks.filter(task => !task.status)
		setTasks(remainingTasks)
	}

	const filteredTasks = tasks.filter(task => {
		if (filter === 'Active') {
			return !task.status
		} else if (filter === 'Completed') {
			return task.status
		} else {
			return true
		}
	})
	const leftTasksLength = tasks.filter(todo => todo.status === false).length
	return { addTask, inputValue, setInputValue, filteredTasks, changeStatus, leftTasksLength, filter, setFilter, clearCompleted }
}