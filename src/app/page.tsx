import Container from "~/shared/components/container/container.component";
import styles from "./page.module.css";
import Button from "~/shared/components/button/button.component";
import UIElements from "./components/ui-elements/ui-elements.component";

export default function Home() {
	return <div className={styles.page}>
		<Container>
			<h1>Page root component</h1>
			<span className="material-symbols-outlined">home</span>
			<span className="material-symbols-outlined">settings</span>
			<Button>Click me</Button>
			<UIElements />

		</Container>

	</div>;
}
