const InitialState = {
    cards: [],
    score: 0,
    page: 'start-page'
};

/*
* cards:[
*   {
*       id: 1,           -> идентификатор
*       type: OC,        -> тип карты, совпадает с названием изображения карты
*       isOpened: true,  -> открыта
*       idGuessed: true  -> угадана
*   },
*   ...
* ]
*
* route принимает три значения: «start-page», «game-page», «end-page»
*
*
* */
export default InitialState;