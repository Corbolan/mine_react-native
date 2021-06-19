const createBoard = ( // Função para Criar tabuleiro - Function for create Mine Board
    rows, // Linhas do tabuleiro - Board Rows
    columns // Colunas do tabuleiro - Board Columns
) => {//Aero Function
    return Array(rows).fill(0).map((_, row) => { // Retorna uma linha array de 0 até o número de linhas - Return a line array 0 to number of rows
        return Array(columns).fill(0).map((_, column) => { // Retorna uma coluna array de 0 até o número de linhas - Return a column array 0 to number of columns
            return {
                row: row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export {createMinedBoard}
