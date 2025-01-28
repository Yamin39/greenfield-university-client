const useFormatTimestamp = (timestamp) => {
  const data = new Date(timestamp);
  return data.toLocaleString();
};

export default useFormatTimestamp;
