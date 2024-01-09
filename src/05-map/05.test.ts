import { ManType } from "./05";

let people: Array<ManType> = []

beforeEach(() => {
	people = [
		{ name: "Andrey Ivanov", age: 33 },
		{ name: "Aleksander Petrov", age: 24 },
		{ name: "Dmitry Sidorov", age: 18 },
	]
})

test("should get array of greeting messages", () => {
	const messages = people.map(man => `Hello ${man.name.split(" ")[0]}!`)

	expect(messages.length).toBe(3);
	expect(messages[0]).toBe("Hello Andrey!");
	expect(messages[1]).toBe("Hello Aleksander!");
	expect(messages[2]).toBe("Hello Dmitry!");
})