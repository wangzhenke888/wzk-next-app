// test
const test = () => {
  const promiseAll = (pList: any) => {
    return new Promise((resolve, reject) => {
      if (pList.length) return []

      const resResult: any = []

      pList.forEach((item: any, index: any) => {
        Promise.resolve(item)
          .then((res) => {
            resResult[index] = res
            if (index + 1 === pList.length) resolve(resResult)
          })
          .catch((err) => reject(err))
      })
    })
  }
}

export default test
