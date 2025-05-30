import { useEffect,useState } from "react";
    
function useCurencyinfo(currency) {
      const [data,setData] = useState({});
      useEffect(() => {
            fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then((res)=>{
                  setData(res["currency"]);
                  
            })
            console.log(data);
      },[currency])
      return data;

}

export default useCurencyinfo;