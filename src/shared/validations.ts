function isLengthGreaterThan(value: string | any[], length: number) {
  if (value.length < length) return false;
  return true;
}

function isLengthInRange(value: string | any[], min: number, max: number) {
  if (value.length < min || value.length > max) return false;
  return true;
}

function isValidEmail(value: string) {
  if (!isLengthGreaterThan(value, 1)) return false;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(value))) {
    return false;
  }
  return true;
}

function isMatch(value1: string | number, value2: string | number) {
  return value1 === value2;
}

function isValidPassword(value: string, re: RegExp) {
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (re) {
    reg = re;
  }

  return re.test(value);
}

function isValidNumber(value: string, re: RegExp) {
  let reg = /^\d*\.?\d*$/;

  if (re) {
    reg = re;
  }

  return reg.test(value);
}

const validations = {
  isLengthGreaterThan,
  isLengthInRange,
  isValidEmail,
  isMatch,
  isValidPassword,
  isValidNumber,
};

export default validations;
