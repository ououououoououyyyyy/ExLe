const CODES = {
  A: 65,
  Z: 90,
}

function createCell(data = '') {
  return `<div class="cell" contenteditable="">${data}</div>`
}

function createRow(info, content, ) {
  return `
    <div class="row">
    <div class="row-info">${info ? info : ''}</div>
    <div class="row-data">${content}</div>
    </div>
  `
}

function createColumn(col) {
  return `<div class="column">${col}</div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const columns = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createColumn)
      .join('')

  rows.push(createRow(null, columns))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map( () => createCell())
        .join('')

    rows.push(createRow(i+1, cells))
  }

  return rows.join('')
}
