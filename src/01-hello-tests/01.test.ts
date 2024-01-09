import { splitIntoWoprds, sum, mult } from "./01";

// подготовительные данные data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
	a = 1;
	b = 2;
	c = 3;
})

test('sum should be correct', () => {
	a = 100;
	// действие action
	const result1 = sum(a, b);

	const result2 = sum(b, c);

	// ожидаемый результат (expect result)
	expect(result1).toBe(102);
	expect(result2).toBe(5);
})

test('mult should be correct', () => {

	// действие action
	const result1 = mult(a, b);
	const result2 = mult(b, c);

	// ожидаемый результат (expect result)
	expect(result1).toBe(2);
	expect(result2).toBe(6);
})

test("splitting into words should be correct", () => {
	// data
	const sent1 = "Hello my friends";
	const sent2 = "JS - the best  programming language";

	// action
	const result1 = splitIntoWoprds(sent1);
	const result2 = splitIntoWoprds(sent2);

	// expect result
	expect(result1.length).toBe(3);
	expect(result1[0] === "hello");
	expect(result1[1] === "my");
	expect(result1[2] === "friends");

	expect(result2.length).toBe(5);
	expect(result2[0] === "js");
	expect(result2[1] === "the");
	expect(result2[2] === "best");
	expect(result2[3] === "programming");
	expect(result2[4] === "language");
})