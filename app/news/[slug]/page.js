import { DUMMY_NEWS } from "@/dummy-news";

export default function Details({ params }) {
	const ourSlug = params.slug;
	const activeItem = DUMMY_NEWS.find((item) => item.slug === ourSlug);
	return (
		<>
			<article className={"news-article"}>
				<header>
					<img
						src={`/images/news/${activeItem.image}`}
						alt={activeItem.title}
					/>
					<h1>{activeItem.title}</h1>
					<time dateTime={activeItem.date}>{activeItem.date}</time>
				</header>
				<p>{activeItem.content}</p>
			</article>
		</>
	);
}
