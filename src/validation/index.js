export default (item, payload) => {
  switch (item.type) {
    case 'boolean':
      return payload;
    case 'numeric':
      return payload > 0;
    case 'multiple':
      return validateMultiple(item, payload);
    default:
      return false;
  }
};

const validateMultiple = (item, payload) => {
  if (Object.prototype.hasOwnProperty.call(item.options, 'min')) {
    const result = payload.length >= item.options.min;
    console.log({ result });
    return payload.length >= item.options.min;
  }
  if (Object.prototype.hasOwnProperty.call(item.options, 'exact')) {
    return payload.length === item.options.exact;
  }
  return true;
};
