const calculateMissingValues = (missingValues, description, price, radio) => {
  if ([null, '', ' ', undefined].includes(description))
    missingValues.push('Description');

  if ([null, '', ' ', undefined].includes(price)) missingValues.push('Price');

  if ([null, '', ' ', undefined].includes(radio))
    missingValues.push('Category');

  if (
    ![null, '', ' ', undefined].includes(description) &&
    ![null, '', ' ', undefined].includes(price) &&
    ![null, '', ' ', undefined].includes(radio)
  )
    missingValues = null;
};

export { calculateMissingValues };
