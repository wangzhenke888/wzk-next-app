// import Md5 from 'spark-md5'

// export default function FileTest() {

//   // 文件处理
//   const filehandle = async (e) => {
//     const file = e.target.files[0]
//     console.log(file);
//     if (!file) return

//     // console.log(file.slice(0, 100));
//     const chunks = createChunks(file, 2 * 1024 * 1024)
//     const hashResult = await getHash(chunks)
//     console.log('hashResult', hashResult);
//   }

//   function createChunks(file, chunkSize) {
//     const result = []
//     for (let i = 0; i < file.size; i += chunkSize) {
//       result.push(file.slice(i, i + chunkSize))
//     }
//     return result
//   }

//   function getHash(chunks) {
//     return new Promise((resolve) => {
//       const spark = new Md5()

//       function _read(i) {
//         if (i >= chunks.length) {
//           console.log(spark.end());
//           resolve(spark.end())
//           return
//         }

//         const blob = chunks[i]
//         const reader = new FileReader()
//         reader.onload = e => {
//           const bytes = e.target.result // 读到的字节数组
//           spark.append(bytes)
//           _read(++i)
//         }
//         reader.readAsArrayBuffer(blob)
//       }
//       _read(0)
//     })

//   }


//   return (
//     <div className="block p-2 mt-1 text-center" >
//       <input type="file"
//         className="bg-amber-500"
//         onChange={filehandle} />
//     </div>

//   )
// }