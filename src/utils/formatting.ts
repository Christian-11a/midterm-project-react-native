
export const formatSalary = (value: number | null | undefined): string => {
  if (value === null || value === undefined) {
    return '---';
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export const cleanHTML = (html: string): string => {
  if (!html) return 'No description available.';
  return html.replace(/<[^>]*>?/gm, '');
};