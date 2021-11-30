const useRandom = () => {
  const randomId = Math.floor(Math.random() * 400 + 1);
  return randomId;
};

export default useRandom;
