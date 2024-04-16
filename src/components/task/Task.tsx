import React from 'react'
import styles from './Task.module.scss'
interface TaskProps {
	task: {
		id: number
		title: string
		status: boolean
	}
	changeStatus: (id: number, status: boolean) => void
}

const Task: React.FC<TaskProps> = ({ task, changeStatus }) => {
	return (
		<div className={styles.task}>
			<div className='pl-[10px]'>
				<input
					type='checkbox'
					className={styles.checkbox}
					checked={task.status}
					onChange={e => changeStatus(task.id, e.target.checked)}
				/>
			</div>

			<div
				className={
					task.status === true
						? 'line-through text-gray-300 pl-[20px]'
						: 'pl-[20px]'
				}
			>
				{task.title}
			</div>
		</div>
	)
}

export default Task
