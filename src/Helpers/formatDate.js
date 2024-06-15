import { formatDistanceToNow, format } from 'date-fns';

export default function formatDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function cryptoFormatDate(date) {
  return format(new Date(date), 'Pp');
}
