const screenWidth = typeof window !== 'undefined' ? window.innerWidth : '';
const applyOrder = screenWidth >= 680;

export default applyOrder;
