"use client"
import React, { useState, useEffect } from "react";
import sanityClient from "../../services/sanityClient";
import BlogCard, {
	BlogCardBig,
	BlogCardRow,
} from "../../components/BlogCard/BlogCard";
import PageHeader from "../../components/PageHeader/PageHeader";

import "./Blogs.css";
import Divider from "../../components/Divider/Divider";
import SizedBox from "../../components/SizedBox/SizedBox";
import Dropdown from "../../components/Dropdown/Dropdown";
import applyOrder from "../../services/applyOrder";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
function Blogs() {
	const [postData, setPostData] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState({
		value: "*",
		label: "All Categories",
	});

	const options = [
		{ value: "*", label: "All Categories" },
		{ value: "accounting", label: "Accounting & Taxation" },
		{ value: "sales", label: "Sales Management" },
		{ value: "marketing", label: "Marketing Management" },
		{ value: "customer support", label: "Customer Support" },
		{ value: "development", label: "Development" },
	];

	const [mostRecentPosts, setMostRecentPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] | order(publishedAt desc) [0..3]{
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
			  },
			}`
			)
			.then((data) => {
				setMostRecentPosts(data);
			})
			.catch(console.error);
	}, []);

	useEffect(() => {
		let query = `*[_type == "post"]`;

		if (selectedCategory && selectedCategory.value !== "*") {
			query = `*[_type == "post" &&  '${selectedCategory.label}' in categories[]->title]`;
		}


		query += `{
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
		}`;

		sanityClient
			.fetch(query)
			.then((data) => setPostData(data))
			.catch(console.error);
	}, [selectedCategory]);

	return (
		<>
			<Header />
			<div className="blog-page">
				<PageHeader
					title="Startup Stories"
					subtitle="Dive into expert articles, industry analyses, and growth strategies tailored for ambitious startups"
					height={true}
				/>
				<section className="main-blog-content">
					<BlogCardBig
						image={mostRecentPosts[0]?.mainImage?.asset.url}
						title={mostRecentPosts[0]?.title}
						categories={mostRecentPosts[0]?.categories}
						alt={mostRecentPosts[0]?.title}
						slug={mostRecentPosts[0]?.slug?.current}
						key={mostRecentPosts[0]?.slug?.current}
					/>
					<div className="main-blog-content-side">
						{mostRecentPosts?.map(
							(post, index) =>
								index !== 0 && (
									<BlogCardRow
										image={post?.mainImage?.asset?.url}
										title={post?.title}
										categories={post?.categories}
										alt={post?.title}
										slug={post?.slug?.current}
										key={post?.slug?.current}
									/>
								)
						)}
					</div>
				</section>
				<SizedBox height={"3rem"} />
				<section
					style={{
						width: "100%",
						padding: applyOrder ? "0 4rem" : "0 1rem",
					}}
				>
					<Divider />
				</section>

				<section className="all-blogs-title">
					<h4 className="bold">All Blog Posts</h4>
					<Dropdown
						placeholder="All Categories"
						dark
						value={selectedCategory}
						onChange={setSelectedCategory}
						options={options}
						mutli={false}
						size="sm"
					/>
				</section>

				<section className="blog-page-grid">
					{postData &&
						postData?.map((post, index) => (
							<BlogCard
								key={index}
								slug={post?.slug?.current}
								image={post?.mainImage?.asset?.url}
								title={post?.title}
								categories={post?.categories}
								alt={post?.title}
							/>
						))}
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Blogs;
