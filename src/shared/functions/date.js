export function toLocaleDate(dataVencimento) {
  return new Date(dataVencimento)
    .toISOString()
    .substr(0, 10)
    .split('-')
    .reverse()
    .join('/');
}

export function isDataHoje(dateIso) {
  if (!dateIso) {
    return false;
  }
  const dataHoje = new Date();
  const dataQuebrada = dateIso.split('-');
  if (dataQuebrada.length !== 3) {
    return false;
  }

  return parseInt(dataQuebrada[0], 10) === dataHoje.getFullYear()
    && parseInt(dataQuebrada[1], 10) === (dataHoje.getMonth() + 1)
    && parseInt(dataQuebrada[2], 10) === dataHoje.getDate();
}

export function isoToBr(date) {
  const dateSplit = date.split('-');
  if (dateSplit.length < 2) {
    return '';
  }
  const dia = dateSplit[2];
  const mes = dateSplit[1];
  const ano = dateSplit[0];

  return `${(`0${dia}`).slice(-2)}/${(`0${mes}`).slice(-2)}/${ano}`;
}

export function brToIso(date) {
  const dateSplit = date.split('/');
  if (dateSplit.length < 2) {
    return '';
  }
  const dia = dateSplit[0];
  const mes = dateSplit[1];
  const ano = dateSplit[2];

  return `${ano}-${(`0${mes}`).slice(-2)}-${(`0${dia}`).slice(-2)}`;
}

export function verificaDataValida(dateString) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    return false;
  }

  const parts = dateString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false;
  }

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29;
  }

  return day > 0 && day <= monthLength[month - 1];
}
