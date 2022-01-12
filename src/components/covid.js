import React, {useEffect , useState } from 'react'

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async ()=>{
        try {
            
            const res =await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
        <h1>hello covid</h1>
        <h2>Deaths</h2>
        <span>{data.deaths}</span>
        </>
    )
}

export default Covid
//  {/* yarn start */}