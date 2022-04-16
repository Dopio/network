const required = (value) => {
    if (value)  return undefined;
    return 'error message';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength)  return `Max lenght is over ${maxLength} symbols!`;
    return undefined;
};

export default required;