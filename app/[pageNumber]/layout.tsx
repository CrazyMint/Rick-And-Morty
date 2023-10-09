export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<h1 className="text-3xl text-center">Rick And Morty</h1>
			<div>{children}</div>
		</section>
	);
}
