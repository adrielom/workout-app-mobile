import { createContext, useContext, useState } from 'react';
import { ExerciseCardProps } from '../components/ExerciseCard';
import { PlaceholderInfo } from '../utils/PlaceholderInfo';

interface IHomeCardList {
	filter: (exerciseCardTitle: string) => void;
	get: () => ExerciseCardProps[];
}

const deafultState = {
	filter: () => {},
	get: () => [],
} as IHomeCardList;

export const HomeCardListContext = createContext<IHomeCardList>(deafultState);

export const HomeCardListProvider = ({ children }: any) => {
	const [exercicesList, setExercicesList] =
		useState<ExerciseCardProps[]>(PlaceholderInfo);

	function filter(exerciseFilterTitle: string) {
		console.log(exercicesList);
		if (exerciseFilterTitle === '') {
			setExercicesList(PlaceholderInfo);
			return;
		}
		setExercicesList((previousState) => {
			const filteredArray = previousState.filter((el) =>
				el.title.toLowerCase().includes(exerciseFilterTitle.toLowerCase())
			);
			return [...filteredArray];
		});
	}

	function get() {
		return exercicesList;
	}

	return (
		<HomeCardListContext.Provider value={{ filter, get }}>
			{children}
		</HomeCardListContext.Provider>
	);
};

export const useHomeCardList = () => {
	return useContext(HomeCardListContext);
};
