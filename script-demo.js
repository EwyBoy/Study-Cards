var card = {
    id: 0,
    title: 'Thermal Dynamics',
    question: 'What is thermal power'
};

function navigate(side) {
    if (side === true) {
        //TODO cap at max card in deck
        if (card.id() < 100) card.id = card.id++;
    } else {
        if (card.id > 0) card.id = card.id--;
    }
}

function hint() {
    //TODO
}