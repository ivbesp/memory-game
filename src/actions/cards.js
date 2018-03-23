
export const setCards = (cards) => ({
    type: 'SET_CARDS',
    cards: cards
});

export const openAllCards = () => (
    {
        type: 'OPEN_ALL_CARDS',
    }
);

export const closeAllCards = () => (
    {
        type: 'CLOSE_ALL_CARDS',
    }
);

export const flipCard = (id) => (
    {
        type: 'FLIP_CARD',
        id: id
    }
);

export const guessCard = (type) => ({
    type: 'GUESS_CARD',
    card_type: type
});

