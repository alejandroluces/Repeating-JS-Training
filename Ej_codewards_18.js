
const keysAndValues = (data) =>{

    // let value= Object.values(data)
    // return [Object.keys(data),value]
        return [Object.keys(data), Object.values(data)]
  }
  console.log(keysAndValues({a: 1, b: 2, c: 3}));

