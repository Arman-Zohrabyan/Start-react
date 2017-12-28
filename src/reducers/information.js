const information = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INFO':
      return [...state];
    default:
      return state;
  }
}

export default information;
