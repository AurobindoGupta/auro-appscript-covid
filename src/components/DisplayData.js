import { Bar } from 'react-chartjs-2';
const DisplayData=(props)=>{
    let abc;
    const api = "https://data.covid19india.org/v4/min/data.min.json";
    const apiHandler = async (api) => {
        abc = await fetch(api).then((res) => res.json());
   
       
     };
     apiHandler(api);
return(
    <div>
    {props.allNames.map((item,key)=>{
       console.log(abc);
        return (<div>
           
            <Bar
           data={{
               labels:['Red','Green'],
               datasets:[
                   {
                       label: {item},
                       data: [],
                       backgroundColor: ['red','green'],
                   }
               ]
           }}

           height={50}
           width={100}
           options={
            {
                indexAxis:'y',
                maintainAspectRatio: false,
            }}
       />
        </div> )   
        
    })}
       
    </div>
)
}
export default DisplayData;