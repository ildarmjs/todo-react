import React from 'react'
import Task from '../task/Task'
import Filter from '../filrers/Filter'
import Form from '../form/Form'
import { useTodos } from '../../hooks/useTodos'
import styles from './TodoApp.module.scss'

const TodoApp: React.FC = () => {
	const {
		addTask,
		inputValue,
		setInputValue,
		filteredTasks,
		changeStatus,
		clearCompleted,
		filter,
		leftTasksLength,
		setFilter
	} = useTodos()

	return (
		<div className={styles.wrapper}>
			<div>
				<h1 className={styles.title}>todos</h1>
				<Form
					addTask={addTask}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
				{filteredTasks.map(task => (
					<Task key={task.id} task={task} changeStatus={changeStatus} />
				))}
				<div className={styles.footerInfo}>
					<span>{leftTasksLength} item(s) left</span>
					<Filter filter={filter} setFilter={setFilter} />
					<button onClick={clearCompleted}>Clear Completed</button>
				</div>
			</div>
		</div>
	)
}

export default TodoApp
