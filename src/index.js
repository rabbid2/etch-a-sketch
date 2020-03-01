
const input=document.querySelector(`input`);
const btn=document.querySelector(`button`);
btn.addEventListener(`click`, game);

function game(){
    let numberOfColumn = 1;
    if (document.querySelector(`.grid`)) document.querySelector(`.grid`).remove();

    let playerValue=input.value;
    input.placeholder=`Введите количество столбцов`;
    if (playerValue > 200) input.placeholder=`Слишком большое число`;
    else if (playerValue < 1 && !isNan(playerValue)) input.placeholder=`Слишком маленькое число`;
    else if (playerValue && !isNaN(playerValue)) numberOfColumn=playerValue;
    else input.placeholder=`Неправильный ввод`;

    input.focus();
    input.value=``;
    drawGrid(numberOfColumn);
}

function drawGrid(numberOfColumn){
    let container=document.querySelector(`.container`);
    let grid=document.createElement(`div`);
    grid.classList.add(`grid`);
    container.appendChild(grid);

    let numberOfRows=Math.round(numberOfColumn*(2/3));

    grid.setAttribute(`style`, `grid-template-columns: repeat(${numberOfColumn}, 1fr); 
                                grid-template-rows: repeat(${numberOfRows}, 1fr);`);
    for(let i=1; i<=numberOfColumn*numberOfRows; i++){
        let div=document.createElement('div');
        div.addEventListener(`mouseover`,selectCell);
        grid.appendChild(div);
    }

}

function selectCell(e){
    if(this.getAttribute(`style`)){
        let colorsStr = this.getAttribute(`style`);
        let colors= colorsStr.slice(colorsStr.indexOf(`(`)+1,colorsStr.indexOf(`)`)).split(`, `);
        this.setAttribute(`style`,`background-color:rgb(${colors[0]-26}, ${colors[1]-26}, ${colors[2]-26});`);
    }
    else{
        let colorRed=getRndInteger(0,255);
        let colorGreen=getRndInteger(0,255);
        let colorBlue=getRndInteger(0,255);
        this.setAttribute(`style`,`background-color:rgb(${colorRed}, ${colorGreen}, ${colorBlue});`);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}