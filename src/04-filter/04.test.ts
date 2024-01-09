test("should take old men older then 90", () => {
	const ages = [18, 20, 22, 1, 100, 90, 14];

	const predicate = (age: number) => age > 90;

	const oldAges = ages.filter(age => age > 90);

	expect(oldAges.length).toBe(1);
	expect(oldAges[0]).toBe(100)
})

test("should take course chipper 160 90", () => {
	const courses = [{ title: "css", price: 110 }, { title: "js", price: 200 }, { title: "react", price: 150 }]

	// const chipPredicate = (course: CourseType) => {
	// 	return course.price < 160;
	// }

	const chipCourses = courses.filter(course => course.price < 160);

	expect(chipCourses.length).toBe(2);
	expect(chipCourses[0].title).toBe("css");
	expect(chipCourses[1].title).toBe("react");

})

test("get only completed tasks", () => {
	const tasks = [
		{ id: 1, title: "Bread", isDone: false },
		{ id: 2, title: "Milk", isDone: true },
		{ id: 3, title: "Solt", isDone: true },
		{ id: 4, title: "Sugar", isDone: true },
	]

	const completedTasks = tasks.filter(task => task.isDone)

	expect(completedTasks.length).toBe(3);
	expect(completedTasks[0].title).toBe("Milk")
})

test("get only uncompleted tasks", () => {
	const tasks = [
		{ id: 1, title: "Bread", isDone: false },
		{ id: 2, title: "Milk", isDone: true },
		{ id: 3, title: "Solt", isDone: true },
		{ id: 4, title: "Sugar", isDone: true },
	]

	const uncompletedTasks = tasks.filter(function (task) { return !task.isDone })

	expect(uncompletedTasks.length).toBe(1);
	expect(uncompletedTasks[0].title).toBe("Bread")
})