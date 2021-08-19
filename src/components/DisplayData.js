import { Bar } from 'react-chartjs-2';
const DisplayData=(props)=>{
 
  // grap components
 
     
return(
    <div>
    
        
       
        <div>
           
            <Bar
                data={{
                        labels:['Red','Green'],
                        datasets:[props.data.map((item)=>{
                            return {
                                label: "stuff",
                                data: {item},
                                backgroundColor: ['red','green','blue' , 'black'],

                            }
                        }) 
                            
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
        
        
        </div>
       
    </div>
)
}
export default DisplayData;