const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h3 className="title-2">Location</h3>
						<p>Bishkek</p>
					</li>
					<li className="content-list__item">
						<h3 className="title-2">Telegram / WhatsApp</h3>
						<p>
							<a href="tel:+996558755756">+(996)558755756</a>
						</p>
					</li>
					<li className="content-list__item">
						<h3 className="title-2">Email</h3>
						<p>
							<a href="mailto:webdev@protonmail.com">
								hello.dilmurat@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;