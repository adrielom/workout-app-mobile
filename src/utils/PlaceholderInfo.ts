import { ExerciseCardProps } from "../components/ExerciseCard";

export const PlaceholderInfo = [
    {
        title: 'Push it HARD!',
        badges: [
            {color: 'orange', title: 'Abs'},
            {color: 'orange', title: 'push'}
        ],
        imageSource: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        numberOfExercises: 7,
        sets: 3,
        reps: 12,
        time: 2061000,
    },
    {
        title: 'Back is Back',
        badges: [
            {color: 'red', title: 'Abs'},
            {color: 'red', title: 'push'}
        ],
        imageSource: 'https://images.unsplash.com/photo-1591258370814-01609b341790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        numberOfExercises: 7,
        sets: 3,
        reps: 12,
        time: 2061000,
    },
] as Array<ExerciseCardProps>