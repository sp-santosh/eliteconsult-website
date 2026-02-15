export function cn(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneNumber(phone: string): string {
  return phone;
}
