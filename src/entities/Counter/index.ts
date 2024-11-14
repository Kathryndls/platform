import { counterReducer } from './model/slice/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from 'entities/Counter/ui/Counter';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
