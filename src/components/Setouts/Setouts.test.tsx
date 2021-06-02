import { render } from "@testing-library/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

describe("<Setouts /> unit test", () => {
	it("InfiniteScroll renders children when passed in", () => {
		const { container } = render(
			<InfiniteScroll dataLength={4} loader={"Loading..."} hasMore={false} next={() => {}}>
				<div className="child" />
			</InfiniteScroll>
		);
		expect(container.querySelectorAll(".child").length).toBe(1);
	});
});
