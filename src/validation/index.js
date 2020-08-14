export default (item, payload) => {
  switch (item.type) {
    case "boolean":
      console.log("VALIDATE BOOLEAN");
      return payload;
    case "numeric":
      console.log("VALIDATE NUMERIC");
      console.log({ payload });
      return payload > 0;
    case "multiple":
      return validateMultiple(item, payload);
    default:
      return false;
  }
};

const validateMultiple = (item, payload) => {
  console.log("VALIDATE MULTIPLE");
  console.log({ min: item.options.min });
  console.log({ length: payload.length });
  if (Object.prototype.hasOwnProperty.call(item.options, "min")) {
    console.log("MIN");
    const result = payload.length >= item.options.min;
    console.log({ result });
    return payload.length >= item.options.min;
  }
  if (Object.prototype.hasOwnProperty.call(item.options, "exact")) {
    console.log("EXACT");
    return payload.length === item.options.exact;
  }
  return true;
};
