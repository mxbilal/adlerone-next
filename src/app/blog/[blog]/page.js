"use client"
import React, { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

import sanityClient, {
	sanityDataset,
	sanityProjectId,
} from "../../../services/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import formatDate from "../../../services/formatDate";
import SizedBox from "../../../components/SizedBox/SizedBox";

import "./BlogArticle.css";

const CategoryBadge = ({ label, dark }) => {
	return (
		<div className={`category-badge bg-primary`}>
			<span className="white">{label}</span>
		</div>
	);
};

const AuthorBadge = ({ authorImg, authorName, date }) => {
	return (
		<div className="author-badge">
			<div className="author-avatar">
				<img src={authorImg} alt={authorName} />
			</div>
			<div className="author-info">
				<p className="md-medium white">{authorName}</p>

				<p className="sm-regular gray-50">{formatDate(date)}</p>
			</div>
		</div>
	);
};

function BlogArticle() {
	const [postData, setPostData] = useState(null);
	const [loading, setLoading] = useState(true);
	const { blog } = useParams();
	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${blog}"]{
					title,
					body,
					publishedAt,
					mainImage{
					  asset->{
						_id,
						url
					  }
					},
					author->{
					  name,
					  image{
						asset->{
						  _id,
						  url
						}
					  }
					},
					categories[]->{
					  title
					}
				 }`
			)
			.then((data) => {
				setPostData(data[0]);
				setLoading(false);
			})
			.catch(console.error);
	}, [blog]);

	// if (!postData) return <div>Loading...</div>;

	return (
		<>
			{loading ? (
				<BlogPostSkeleton />
			) : (
				<div className="blog-article">
					<div
						className="blog-article-header"
						style={{
							background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${postData.mainImage.asset.url}), lightgray 0px -479.074px / 100% 316.168% no-repeat`,
						}}
					>
						<div className="blog-header-content">
							<h1 className="bold white">{postData.title}</h1>
							<div className="blog-header-extra-info">
								<div className="blog-header-categories">
									{postData.categories &&
										postData.categories.map((category) => (
											<CategoryBadge
												key={category._id}
												label={category.title}
											/>
										))}
								</div>
								<AuthorBadge
									authorImg={
										postData.author.image?.asset?.url
									}
									authorName={postData.author.name}
									date={postData.publishedAt}
								/>
							</div>
						</div>
					</div>
					<div className="blog-body">
						<BlockContent
							blocks={postData.body}
							projectId={sanityProjectId}
							dataset={sanityDataset}
						/>
					</div>
				</div>
			)}
		</>
	);
}

function BlogPostSkeleton() {
	return (
		<div className="blog-article">
			<div
				className="blog-article-header"
				style={{
					background: "rgba(0, 0, 0, 0.50)",
				}}
			>
				<div className="blog-header-content">
					<h1 className="bold white" style={{ width: "100%" }}>
						<div className="skeleton-title-1" />
						<SizedBox height={"20px"} />
						<div className="skeleton-title-2" />
					</h1>
					<div className="blog-header-extra-info">
						<div className="blog-header-categories">
							<div className="skeleton-category" />
							<div className="skeleton-category" />
						</div>
						<div className="author-badge">
							<div className="skeleton-author-avatar" />
							<div className="author-info">
								<div className="skeleton-author-name" />
								<div className="skeleton-author-date" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="blog-body">
				<div className="skeleton-body">
					<svg
						width="100%"
						height="132"
						viewBox="0 0 960 132"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="960"
							height="24"
							rx="4"
							fill="url(#paint0_linear_553_1837)"
						/>
						<rect
							y="36"
							width="960"
							height="24"
							rx="4"
							fill="url(#paint1_linear_553_1837)"
						/>
						<rect
							y="72"
							width="941"
							height="24"
							rx="4"
							fill="url(#paint2_linear_553_1837)"
						/>
						<rect
							y="108"
							width="896"
							height="24"
							rx="4"
							fill="url(#paint3_linear_553_1837)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_553_1837"
								x1="6.59373e-06"
								y1="12.0001"
								x2="960"
								y2="12.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_553_1837"
								x1="6.59373e-06"
								y1="48.0001"
								x2="960"
								y2="48.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_553_1837"
								x1="6.46323e-06"
								y1="84.0001"
								x2="941"
								y2="84.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_553_1837"
								x1="6.15415e-06"
								y1="120"
								x2="896"
								y2="120"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
						</defs>
					</svg>

					{/* <SizedBox height={"40px"} /> */}

					<svg
						width="100%"
						height="132"
						viewBox="0 0 960 132"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="960"
							height="24"
							rx="4"
							fill="url(#paint0_linear_553_1837)"
						/>
						<rect
							y="36"
							width="960"
							height="24"
							rx="4"
							fill="url(#paint1_linear_553_1837)"
						/>
						<rect
							y="72"
							width="941"
							height="24"
							rx="4"
							fill="url(#paint2_linear_553_1837)"
						/>
						<rect
							y="108"
							width="896"
							height="24"
							rx="4"
							fill="url(#paint3_linear_553_1837)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_553_1837"
								x1="6.59373e-06"
								y1="12.0001"
								x2="960"
								y2="12.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_553_1837"
								x1="6.59373e-06"
								y1="48.0001"
								x2="960"
								y2="48.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_553_1837"
								x1="6.46323e-06"
								y1="84.0001"
								x2="941"
								y2="84.0003"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_553_1837"
								x1="6.15415e-06"
								y1="120"
								x2="896"
								y2="120"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#DFDFDF" />
								<stop offset="1" stop-color="#EDEDED" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default BlogArticle;
export { CategoryBadge, AuthorBadge };
