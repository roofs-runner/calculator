const AMOUNT_FORMATTER = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 1,
})

export function convertToFloat(value: number) {
  console.log('convertToFloat', value)
  console.log('AMOUNT_FORMATTER.format', AMOUNT_FORMATTER.format(value))
  const formattedValue = AMOUNT_FORMATTER.format(value).replace(/,/gi, '.')
  // return AMOUNT_FORMATTER.format(value);
  return formattedValue.replace('.0', '')
}

export function parseFloatingSting(value: string) {
  return parseFloat(value.replace(',', '.'))
}
