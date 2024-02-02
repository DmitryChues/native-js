type UserType = {
	name: string,
	age: number,
	address: { title: string }
}
function increaseAge(u: UserType) {
	u.age++
}

test('big test', () => {
	let user: UserType = {
		name: 'Dima',
		age: 25,
		address: {
			title: 'Minsk'
		}
	};
	increaseAge(user);

	expect(user.age).toBe(26);

	const superman = user;

	increaseAge(superman);

	expect(user.age).toBe(27)
})

test('array test', () => {
	let users: UserType[] = [
		{ name: 'Dima', age: 25, address: { title: 'Minsk' } },
		{ name: 'Vika', age: 26, address: { title: 'Minsk' } },
		{ name: 'Alina', age: 16, address: { title: 'Minsk' } },
	];

	let admins = users

	admins.push({ name: 'Bandit', age: 10, address: { title: 'Minsk' } })

	expect(users[3].age).toBe(10);
	expect(users[3]).toEqual({ name: 'Bandit', age: 10, address: { title: 'Minsk' } })
})

test('value type test', () => {
	let usersCount = 100;
	let adminsCount = usersCount;
	adminsCount = 20;
	expect(usersCount).toBe(100);
	expect(adminsCount).toBe(20);
})

test('big test obj', () => {
	const address = {
		title: 'Minsk'
	}

	let user: UserType = {
		name: 'Dima',
		age: 25,
		address: address
	};

	let addr = user.address

	let user2: UserType = {
		name: "Natasga",
		age: 34,
		address: user.address
	}

	user2.address.title = 'Kanary';

	expect(user.address.title).toBe('Kanary')

})


test('big test array', () => {
	const address = {
		title: 'Minsk'
	}

	let user: UserType = {
		name: 'Dima',
		age: 25,
		address: address
	};

	let user2: UserType = {
		name: "Natasga",
		age: 34,
		address: user.address
	}

	let users: UserType[] = [user, user2, { name: 'Alina', age: 16, address: address }]

	const admins = users

	admins[0].name = 'Dmitry'

	expect(users[0].name).toBe('Dmitry')
	expect(admins[0].name).toBe('Dmitry')
	expect(user.name).toBe('Dmitry')
	// expect(user.address.title).toBe('Kanary')

})

