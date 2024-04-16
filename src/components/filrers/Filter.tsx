import React from 'react'

interface IFilterProps {
	filter: string
	setFilter: (filter: string) => void
}

const Filter: React.FC<IFilterProps> = ({ filter, setFilter }) => {
	return (
		<div className='flex gap-[15px]'>
			<button
				className={
					filter === 'All'
						? 'border-red-300 border px-[10px]'
						: ' hover:border-red-300 border px-[10px]'
				}
				onClick={() => setFilter('All')}
			>
				All
			</button>
			<button
				className={
					filter === 'Active'
						? 'border-red-300 border px-[10px]'
						: 'hover:border-red-300 border px-[10px]'
				}
				onClick={() => setFilter('Active')}
			>
				Active
			</button>
			<button
				className={
					filter === 'Completed'
						? 'border-red-300 border px-[10px]'
						: 'hover:border-red-300 border px-[10px]'
				}
				onClick={() => setFilter('Completed')}
			>
				Completed
			</button>
		</div>
	)
}

export default Filter
