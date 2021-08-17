import { Bar } from 'react-chartjs-2';
const DisplayData=(props)=>{
 
  
 
     
return(
    <div>
    {props.allNames.map((item,key)=>{
        
        let abc = props.abc;
        return (<div>
           
            <Bar
                data={{
                        labels:['Red','Green'],
                        datasets:[
                            {
                                label: {item},
                                data: [abc],
                                backgroundColor: ['red','green','blue' , 'black'],

                            }
                        ],
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