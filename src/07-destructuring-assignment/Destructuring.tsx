import React, { FC, useState } from 'react';

type LessonType = {
	title: string
}

type AddressType = {
	street: StreetType
}

type StreetType = {
	title: string
}

export type ManType = {
	name: string,
	age: number,
	lessons: LessonType[],
	address: AddressType
}

type ManPropsType = {
	title: string
	man: ManType
}

function useDimychState(m: string) {
	return [m, function () { }]
}
function useDimychState2(m: string) {
	return {
		message: m,
		setMessage: function () { },
	}
}

export const Man: FC<ManPropsType> = ({ title, man: { name } }) => {

	const [message, setMessage] = useState<string>('hello')

	// const { title, man: { name } } = props;
	// const { name } = props.man

	return (
		<div>
			<h1>{title}</h1>
			<hr />
			<div>
				{name}
			</div>
		</div>
	)
}