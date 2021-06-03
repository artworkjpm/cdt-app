import { getUserName } from "../designActions";

describe("DesignActions", () => {
	test("getUserName() should return initials of name in Uppercase", () => {
		const userNumber = 1;
		const usersArray = [
			{ id: 1, name: "Walter Doe" },
			{ id: 2, name: "John Doe" },
		];
		expect(getUserName(userNumber, usersArray).props["data-initials"]).toBe("WD");
	});
});
