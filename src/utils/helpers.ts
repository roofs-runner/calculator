const AMOUNT_FORMATTER = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 1,
})

export function convertToFloat(value: number) {
  const formattedValue = AMOUNT_FORMATTER.format(value).replace(/,/gi, '.')
  return formattedValue.replace('.0', '')
}

export function parseFloatingSting(value: string) {
  return parseFloat(value.replace(',', '.'))
}
