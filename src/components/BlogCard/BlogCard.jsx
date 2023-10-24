import React from "react";
import { CategoryBadge } from "../BlogArticle/BlogArticle";

import "./BlogCard.css";
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'

export default function BlogCard({ image, title, categories, alt, slug }) {
	const navigate = useRouter();
	return (
		<div
			className="blog-card"
			onClick={() => {
				navigate.push("/blog/" + slug);
			}}
		>
			<img src={image} alt={alt} />
			<div className="blog-card-content">
				<h5 className="bold gray-800">{title}</h5>
				<div className="categories">
					{categories?.map((category, i) => {
						return <CategoryBadge key={i} label={category.title} />;
					})}
				</div>
			</div>
		</div>
	);
}

function BlogCardRow({ image, title, categories, alt, slug }) {
	const navigate = useRouter();
	return (
		<div
			className="blog-card row"
			onClick={() => {
				navigate.push("/blog/" + slug);
			}}
		>
			<img src={image} alt={alt} />
			<div className="blog-card-content">
				<h5 className="bold gray-800">{title}</h5>
				<div className="categories">
					{categories?.map((category, i) => {
						return <CategoryBadge key={i} label={category.title} />;
					})}
				</div>
			</div>
		</div>
	);
}

function BlogCardBig({ image, title, categories, alt, slug }) {
	const navigate = useRouter();
	return (
		<div
			className="blog-card big"
			onClick={() => {
				navigate.push("/blog/" + slug);
			}}
		>
			<img src={image} alt={alt} />
			<div className="blog-card-content">
				<h3 className="bold gray-800">{title}</h3>
				<div className="categories">
					{categories?.map((category, i) => {
						return <CategoryBadge key={i} label={category.title} />;
					})}
				</div>
			</div>
		</div>
	);
}

export { BlogCardRow, BlogCardBig };
