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
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati assumenda, iure veritatis consequuntur ipsa aperiam asperiores error corporis perspiciatis praesentium soluta, nulla, distinctio aliquam quibusdam qui veniam. Vel dicta dignissimos sed veniam repudiandae consequatur molestias officia voluptates nobis quis. Rem recusandae at ad error culpa porro ex, voluptatum quo dolorum accusantium quod eaque reprehenderit in sequi mollitia tempore facere laborum expedita nulla cumque optio atque. Nesciunt reprehenderit necessitatibus unde odit aperiam. Laudantium sit molestiae quidem fuga a veniam, necessitatibus porro nobis soluta, temporibus nostrum doloribus, consectetur harum placeat odit! Sit doloribus dolorem atque laudantium. Impedit, ut ipsam perspiciatis, fugit doloribus, eos blanditiis quae ea eius numquam officia commodi itaque assumenda. Sint consequuntur rem tempora. Laudantium excepturi tempore, inventore consequuntur minima enim odio molestiae, autem, maxime praesentium doloribus doloremque quisquam! Harum esse labore hic inventore? Ab illum laborum ducimus atque. Officiis, architecto nisi? Magni, amet animi eos modi ipsum perspiciatis quidem dolore impedit laudantium natus cumque architecto adipisci fugit quasi quisquam dignissimos id. Earum consectetur tempora quo dolore id. Unde ullam sed officiis dolore blanditiis, officia aliquid dignissimos eos voluptatum sequi iure. Itaque aperiam quo fugiat, vitae reiciendis saepe maiores architecto sit nostrum, quaerat aliquam harum minima natus. Quae sed aliquam atque temporibus at, consequuntur reiciendis deleniti officiis quaerat. Nostrum omnis eaque accusantium vitae debitis, corrupti quae est quis voluptate possimus quos ut deserunt earum consequatur nulla fuga voluptatum minus dolores recusandae reprehenderit. Iste officia velit iure laudantium consectetur! Harum asperiores consectetur quibusdam tenetur soluta, fuga vero dolores nobis maiores illo optio alias quo numquam porro, facilis praesentium ipsam delectus consequuntur incidunt? Velit eligendi enim numquam dolorem atque fugiat obcaecati sed praesentium blanditiis! Modi recusandae perspiciatis dolores id possimus voluptatem, reiciendis laudantium soluta quos repellendus totam explicabo itaque accusamus expedita ex aperiam ipsam non, commodi hic aliquam? Unde, asperiores ipsa.</p>
			<Button>Click me</Button>
			<UIElements />

		</Container>

	</div>;
}
