import isEmpty from "lodash/isEmpty";

export const isVacant = (value: any) => {
  return value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    value === '' ||
    (typeof value === 'number' && isNaN(value)) ||
    isEmpty(value)
}