/* eslint-disable no-useless-escape */
/* eslint-disable radix */
export const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  return (false);
};

const removeCpfCnpj = (valor) => valor.replace(/[ -.*+?^${}()|/[\]\\]/g, '');

export const validateCpf = (cpf) => {
  const strCPF = removeCpfCnpj(cpf);
  let soma;
  let resto;
  soma = 0;
  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i += 1) {
    soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  return resto === parseInt(strCPF.substring(10, 11), 10);
};

export const validateDate = (dateString) => {
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
};
