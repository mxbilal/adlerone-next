import React from "react";
import sanityClient from "../../services/sanityClient";
import { useEffect } from "react";
import { useState } from "react";
import CenterHeading from "../CenterHeading/CenterHeading";
// import { Link } from "feather-icons-react/build/IconComponents";
import BlogCard from "../BlogCard/BlogCard";
import Link from 'next/link'

const BlogItems = ({ category }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post" && categories[].title == "${category}"] | order(publishedAt desc) [0..2]{
					title,
					slug,
					mainImage{
						asset->{
							_id,
							url
						}
					},
					categories[]->{
						title
					}
				}`
			)
			.then((data) => {
				setPosts(data);
			})
			.catch(console.error);
	}, []);

	/* useEffect(() => {
		sanityClient
			.fetch(
				`{
					"categoryPosts": *[_type == "post" && categories[].title == "${category}"] | order(publishedAt desc) [0..2],
					"recentPosts": *[_type == "post"] | order(publishedAt desc) [0..2]
				}`
			)
			.then((data) => {
				const combinedPosts = [
					...data.categoryPosts,
					...data.recentPosts,
				].slice(0, 3);
				setPosts(combinedPosts);
			})
			.catch(console.error);
	}, []); */

	if (posts.length > 2) {
		return (
			<section className="blog-items">
				<CenterHeading title="Latest Articles" />
				<div className="blog-items-grid">
					{posts.map((post) => (
						<Link
							href={`/blog/${post.slug.current}`}
							key={post.slug.current}
							style={{
								textDecoration: "none",
							}}
						>
							<BlogCard
								image={post.mainImage.asset.url}
								title={post.title}
								categories={post.categories.map(
									(category) => category.title
								)}
								alt={`Blog Image - ${post.title}`}
							/>
						</Link>
					))}
				</div>
			</section>
		);
	}
};

export default BlogItems;
