import {getBook, getBooks, getInitState, initState} from './'

export const switchPath = path => {
  
  if (path === "/books") {
    const init = initState();
    return getBooks().then(data => {
      init.books.lists = data;
      return initState;
    });
  } else {
    return getInitState();
  }
};
