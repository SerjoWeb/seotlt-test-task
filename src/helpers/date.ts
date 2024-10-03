export const formatDateTime = (): string => {
  const date = new Date();
  const pad = (n: number) => n < 10 ? '0' + n : n.toString();
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}-${month}-${year} : ${hours}-${minutes}`;
};
