export function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, '')

  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{2})/, '($1) ')
      .replace(/(\d{4})/, '$1-')
      .replace(/(-\d{4}).*/, '$1')
  }

  return numbers
    .replace(/^(\d{2})/, '($1) ')
    .replace(/(\d{5})/, '$1-')
    .replace(/(-\d{4}).*/, '$1')
}

export function handlePhoneInput(event: React.ChangeEvent<HTMLInputElement>): string {
  const input = event.target.value
  const formatted = formatPhoneNumber(input)
  return formatted
}