import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
export default function News() {
	return (
		<>
			<h1>News Sections</h1>
			<ul className={"news-list"}>
				{DUMMY_NEWS.map((newsItems) => (
					<li key={newsItems.id}>
						<Link href={`/news/${newsItems.slug}`}>
							<img
								src={`/images/news/${newsItems.image}`}
								alt={newsItems.title}
							/>
							<span>{newsItems.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
