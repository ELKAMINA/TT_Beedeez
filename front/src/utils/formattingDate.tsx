export function formatDate(da: Date): string {
  const date = new Date(da);

  const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const formattedDate = dateFormatter.format(date);

  return formattedDate.replace(' à', ' -');
}
