export const getQueryParams = (search) => {
  const urlSearchParams = new URLSearchParams(search);
  const params = {};
  for (const [key, value] of urlSearchParams) {
    params[key] = value;
  }
  return params;
};

export const getPassedTime = (millis) => {
  const start = new Date(millis);
  const end = new Date();

  const seconds = Math.round((end - start) / 1000);
  const years = Math.floor(seconds / (365 * 24 * 60 * 60));
  if (!years) {
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    if (!months) {
      const days = Math.floor(seconds / (24 * 60 * 60));
      if (!days) {
        const hours = Math.floor(seconds / (60 * 60));
        if (!hours) {
          const minutes = Math.floor(seconds / 60);
          if (!minutes) {
            return `${seconds} secods ago`;
          }
          return `${minutes} minutes ago`;
        }
        return `${hours} hour ago`;
      }
      return `${days} day ago`;
    }
    return `${months} month ago`;
  }
  return `${years} year ago`;
};
