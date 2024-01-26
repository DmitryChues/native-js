

export const usersObj = {
	'0': 'Dima',
	'1': 'Vika',
	'2': 'Valera',
	'3': 'Katya'
}

type UsersType = {
	[key: string]: { id: number, name: string }
}

export const users: UsersType = {
	'101': { id: 101, name: 'Dima' },
	'3232312': { id: 3232312, name: 'Vika' },
	'1212': { id: 1212, name: 'Valera' },
	'1': { id: 1, name: 'Katya' },
}
const user = { id: 2, name: 'Igor' }

// users[1]
// добавить в ассоциативный массив
users[user.id] = user
// удалить
delete users[user.id]
// обновить
users[user.id].name = 'Vitya'

export const usersArray = [
	{ id: 101, name: 'Dima' },
	{ id: 3232312, name: 'Vika' },
	{ id: 1212, name: 'Valera' },
	{ id: 1, name: 'Katya' },
]

// usersArray.find(u => u.id === 1)
// добавить
const usersCopy = [...usersArray, user]
// удалить
const usersCopy2 = usersArray.filter(u => u.id !== user.id)