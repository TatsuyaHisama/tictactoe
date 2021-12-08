import React, { createContext, Dispatch, SetStateAction } from "react";

type FirstPlayerContext = {
    firstPlayer: string;
    setFirstPlayer: Dispatch<SetStateAction<string>>;
};
type SecondPlayerContext = {
    secondPlayer: string;
    setSecondPlayer: Dispatch<SetStateAction<string>>;
};

export const FirstPlayerContext = createContext({} as FirstPlayerContext);
export const SecondPlayerContext = createContext({} as SecondPlayerContext);