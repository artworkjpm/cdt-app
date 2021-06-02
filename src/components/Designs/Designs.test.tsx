import { render } from "@testing-library/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

it("<Designs> renders .infinite-scroll-component", () => {
	const { container } = render(
		<InfiniteScroll dataLength={4} loader={"Loading..."} hasMore={false} next={() => {}}>
			<div />
		</InfiniteScroll>
	);
	expect(container.querySelectorAll(".infinite-scroll-component").length).toBe(1);
});
