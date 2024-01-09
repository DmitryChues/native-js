export type ManType = {
	name: string
	age: number
}

const people: Array<ManType> = [
	{ name: "Andrey Ivanov", age: 33 },
	{ name: "Aleksander Petrov", age: 24 },
	{ name: "Dmitry Sidorov", age: 18 },
]

const dimichTransformator = (man: ManType) => ({
	stack: ["css", "html", "js", "tdd", "react"],
	firstName: man.name.split(" ")[0],
	lastName: man.name.split(" ")[1]
})

const devs1 = [
	{
		stack: ["css", "html", "js", "tdd", "react"],
		firstName: "Andrey", lastName: "Ivanov"
	},
	{
		stack: ["css", "html", "js", "tdd", "react"],
		firstName: "Aleksander", lastName: "Petrov"
	},
	{
		stack: ["css", "html", "js", "tdd", "react"],
		firstName: "Dmitry", lastName: "Sidorov"
	},
]

let d1 = dimichTransformator(people[0])
let d2 = dimichTransformator(people[1])
let d3 = dimichTransformator(people[2])
const dev2 = [
	d1, d2, d3
]

const devs3 = people.map(dimichTransformator)
const devs4 = people.map(man => ({
	stack: ["css", "html", "js", "tdd", "react"],
	firstName: man.name.split(" ")[0],
	lastName: man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name}!`)