
export const resetScore = () => (
    {
        type: 'RESET_SCORE'
    }
);

export const incrementScore = (n) => (
    {
        type: 'INCREMENT_SCORE',
        n:n
    }
);

export const decrementScore = (n) => (
    {
        type: 'DECREMENT_SCORE',
        n:n
    }
);
