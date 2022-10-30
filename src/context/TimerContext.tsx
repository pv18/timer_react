import {createContext} from 'react';

type TimerContextType = {}

const TimerContext = createContext<Required<TimerContextType>>({} as TimerContextType)

const TimerProvider = (props: any) => {

    return (
        <TimerContext.Provider
            value={{}}
        >
            {props.children}
        </TimerContext.Provider>
    )
}

export {TimerContext, TimerProvider}