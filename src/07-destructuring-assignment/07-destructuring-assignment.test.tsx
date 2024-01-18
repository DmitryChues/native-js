import { ManType } from "./Destructuring";

let props: ManType;
beforeEach(() => {
	props = {
		name: 'Dimych',
		age: 25,
		lessons: [{ title: '1' }, { title: '2' }],
		address: {
			street: {
				title: 'Chkalova',
			},
		},
	}
})

test('', () => {

	// const age = props.age;
	// const lessons = props.lessons;

	const { age, lessons } = props
	const { title } = props.address.street

	expect(age).toBe(25);
	expect(lessons.length).toBe(2);
	expect(title).toBe('Chkalova');
})

test('', () => {
	const l1 = props.lessons[0];
	const l2 = props.lessons[1];

	const [, ls2] = props.lessons

	expect(l1.title).toBe('1');
	expect(l2.title).toBe('2');
	// expect(ls1.title).toBe('1');
	expect(ls2.title).toBe('2');
})