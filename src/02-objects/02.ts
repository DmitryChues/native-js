type CityType = {
	title: string
	countryTitle: "Belarus"
}

type AddressType = {
	streetTitle: string
	city: CityType
}

type TechnologyType = {
	id: number
	title: string
}

export type StudentType = {
	name: string
	age: number
	isActive: boolean
	address: AddressType
	technologies: TechnologyType[]
}

export const student: StudentType = {
	name: "Dima",
	age: 32,
	isActive: false,
	address: {
		streetTitle: "Chkalova",
		city: {
			title: "Minsk",
			countryTitle: "Belarus"
		}
	},
	technologies: [
		{
			id: 1,
			title: "HTML",
		},
		{
			id: 2,
			title: "CSS",
		},
		{
			id: 3,
			title: "React",
		},
	]
}

console.log(student.age);
console.log(student.address.city.title);
console.log(student.technologies[2].title)
