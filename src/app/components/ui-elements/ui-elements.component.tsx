'use client'
import React, { FC } from 'react'
import Modal, { ModalVariant } from '~/shared/components/modal/modal.component';
import styles from './ui-elements.module.css';
import { TabButton, Tabs } from '~/shared/components/tabs/tabs.component';

type Props = {
	prop?: any;
}

const tabButtons = [
	{
		id: 1,
		label: 'Tab 1',
		content: 'Tab 1 content',
	},
	{
		id: 2,
		label: 'Tab 2',
		content: 'Tab 2 content',
	},
	{
		id: 3,
		label: 'Tab 3',
		content: 'Tab 3 content',
	},
	{
		id: 4,
		label: 'Tab 4',
		content: 'Tab 4 content',
	},
	{
		id: 5,
		label: 'Tab 5',
		content: 'Tab 5 content',
	},
];

const UIElements: FC<Props> = (props) => {
	const [modalOpen, setModalOpen] = React.useState<ModalVariant | null>(null)
	const [activeTab, setActiveTab] = React.useState(tabButtons[0].content);


	console.log('UIElements', props)

	return (
		<div>
			<h1>UI Elements</h1>
			<section className={styles.section}>
				<h2>Modal component</h2>
				<button onClick={() => setModalOpen('modal')}>Open modal</button>
				<button onClick={() => setModalOpen('drawerLeft')}>Open drawerLeft</button>
				<button onClick={() => setModalOpen('drawerRight')}>Open drawerRight</button>

				<Modal
					isOpen={!!modalOpen}
					onClose={() => setModalOpen(null)}
					variant={modalOpen as ModalVariant}
					header={<h1>Modal header</h1>}
					footer={
						<div>
							<button onClick={() => setModalOpen(null)}>Close</button>
							<button onClick={() => setModalOpen(null)}>Save</button>
						</div>
					}
				>
					<h1>Modal content</h1>
					<p>This is a modal</p>
					<h2>test 2</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe distinctio animi, amet repellat officia quas totam eveniet, deleniti asperiores, minus libero atque ducimus. Eligendi, cupiditate deserunt reprehenderit delectus tempore consequuntur!</p>
				</Modal>
			</section>
			<section className={styles.section}>
				<h2>Tabs component</h2>
				<Tabs underlineThickness={3}>
					{tabButtons.map(button => (
						<TabButton
							key={button.id}
							onClick={() => {
								setActiveTab(button.content);
							}}
							isActive={activeTab === button.content}>
							{button.label}
						</TabButton>
					))}
				</Tabs>
				<div>
					{tabButtons.map(button => (
						<div key={button.id} style={{ display: activeTab === button.content ? 'block' : 'none' }}>
							{button.content}
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default UIElements