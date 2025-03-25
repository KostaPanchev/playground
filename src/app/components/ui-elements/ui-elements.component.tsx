'use client'
import React, { FC } from 'react'
import Modal from '~/shared/components/modal/modal.component';
// import styles from './UIElements.module.scss'

type Props = {
	prop?: any;
}

const UIElements: FC<Props> = (props) => {
	const [modalOpen, setModalOpen] = React.useState(false)
	console.log('UIElements', props)

	return (
		<div>
			<h1>UI Elements</h1>
			<button onClick={() => setModalOpen(true)}>Open modal</button>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<h1>Modal content</h1>
				<p>This is a modal</p>
			</Modal>
		</div>
	)
}

export default UIElements