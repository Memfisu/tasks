function func(array) {

  const storage = [...array.reverse()];

  while (storage.length) {

    const lastElem = storage.pop();
    if (typeof lastElem === 'object') {
      storage.push(...lastElem.reverse());
    } else {
      console.log(lastElem.toString());

    }
  }

}

func([1, [2, 3], [4, 5], [6, [7, 8], [9, [10, [11, 12, 13]]], 14, [15, 16]], 17]);
