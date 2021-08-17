import { Bar } from 'react-chartjs-2';
const DisplayData=(props)=>{
return(
    <div>
       <Bar
           data={{
               labels:['Red','Green'],
               datasets:[
                   {
                       label: 'State Name',
                       data: [10,20],
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
    </div>
)
}
export default DisplayData;