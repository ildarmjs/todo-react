import { FC } from 'react'
import styles from './Form.module.scss'

interface IForm {
	inputValue: string
	addTask: (title: string) => void
	setInputValue: (value: string) => void
}

const Form: FC<IForm> = ({ inputValue, addTask, setInputValue }) => {
	return (
		<div className={styles.field}>
			<div className={styles.chevron} />
			<input
				className={styles.input}
				type='text'
				placeholder='What needs to be done?'
				value={inputValue}
				onKeyDown={e => e.key === 'Enter' && addTask(inputValue)}
				onChange={e => setInputValue(e.target.value)}
			/>
		</div>
	)
}

export default Form
