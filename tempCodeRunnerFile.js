eFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleApi = async () => {
//     setLoading(true);
//     try {
//       const apiRes = await fetch(url);
//       const result = await apiRes.json();
//       setData(result);
//     } catch (error) {
//       setError(error);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleApi();
//   }, [data]);

//   return data;
// };