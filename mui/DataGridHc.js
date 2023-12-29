// Description: This is the data grid component that is used to display the data in the table format

import * as React from 'react';
import Box from '@mui/material/Box';

import { DataGrid, GridPagination, GridToolbar, GridToolbarExport } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';


export default function DataGridHc({data , CustomToolBar , loading, formik}) {
const [pageSize, setPageSize] = React.useState(15);
  const handlePageSizeChange = (value) => {
    setPageSize(value);
    if(formik){
      formik.setFieldValue("limit",value)
      formik.handleSubmit()
    }
  };


  return (
    <Box
      sx={{
       
        height: "100%",
      
       color: 'white',
       
        '& .grid-cell-brands-name':{
          color: 'white',
          backgroundColor: '#446980',
        },
       '& .css-1jj1s45-MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="false"]':{
          color: 'white',
       },
       '& .css-1jj1s45-MuiDataGrid-root .MuiDataGrid-booleanCell[data-value="true"]':{
        color: 'white'}
      
      }}
    >
      <DataGrid
       
        loading={loading}
        {...data}
        disableColumnSelector={true}
        pageSize={pageSize}
        
       
        getRowId={(row) => row._id}
        sx={{ color: '#f8f7f2', 
         // change the color of the
        //  '& .MuiDataGrid-main':{
        //   minHeight: "99%",
        //   maxHeight: "99%",
        //  },
         //get the column header
          '&  .css-z8fhq1-MuiDataGrid-columnHeaders':{
            color: 'white',
            backgroundColor: '#446990',
          },
          '& .MuiDataGrid-toolbarContainer':{

            color: 'white',
            backgroundColor: 'black',
          },
         
        
        '& .MuiDataGrid-footerContainer':{
          color: 'white',
          bgcolor: 'grey',
        }

         }}
         pagination
        getRowSpacing={(params) => ({
        top:params.isFirstRow ? 0 : 2,
        bottom:params.isLastRow ? 0 : 2,
         })
      }
        
         rowsPerPageOptions={[5,10,15,20,25]}
         components={{
           Toolbar: CustomToolBar,
           //add custom action to the toolbar
           LoadingOverlay: LinearProgress,
         
         }}
         onPageSizeChange={handlePageSizeChange}
         componentsProps={{
         
         
          toolbar: {
            // change the color of the datagrid toolbar
            sx: { bgcolor: 'black'},
           
          },
        
        
         }}

       
        
      />
    </Box>
  );
}



// import { Add, AddCardOutlined, AddCircleOutlineOutlined, RunCircleRounded } from '@mui/icons-material'
// import { Button, Card, CardActions, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import axios from 'axios'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React from 'react'

// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import AddToCatagories from './addCatagory'
// import EditCatagories from './editCatagory'





// export default function Catagories({}) {
//   //const modelData=items
 
//   //console.log(modelData,location,"....modelData....");
//   const [modelData, setModelData] = useState([])
//   const [location, setLocation] = useState([{name:"catagories",url:"/cpanel/manage"}])
//   const router = useRouter();
//   const url = router.asPath
//   const query = router.query;
//   console.log(router,"....router..Catagories..");

//   const [addModule, setAddModel] = useState(false)

//   const refresh = useSelector(state=>state.refresh)
//   console.log(refresh,"....refresh....");
 
//   console.log(location,"....location....");

//   useEffect(() => {
//     const fetchData = async () => {
//     const cats =  await  axios.post('http://localhost:3000/api/repairs/catagories', {url,query,location})
//     setLocation(cats.data.location)
//      setModelData(cats.data.items)
      
//     console.log("catagories",cats.data);
     
//     }
//     fetchData()
//     return () => {
//       setModelData([])
//     }
//   }, [url , refresh])

//   const handleClick = (item) => {
//     setLocation([...location, {name:item.name,url:`/cpanel/brand/?device=${item.id}`}])
//     console.log(location);
//     router.push(
//       {
//         pathname: `/cpanel/manage/catagory/${item.name}`,
//         query: { device: item._id },
//       }
//     );
//   };
// //   modelData[0].listAarray.map((item) => (
// //     <Card key={item.id} sx={{ width: 300, height: 300, margin: 2 }}>
// //     <Image src={item.imageurl} image />
// //         <Typography variant="h6" gutterBottom>
// //             {item.name} 
// //         </Typography>

// //     </Card> 

//   return (
//     <div style={{display:"flex", flexDirection:"column",textAlign:"center" , width:'100%', backgroundColor:"#eeeeee"}}>
  
    
//     <div className='flex-end'>
//     <AddToCatagories catagories={modelData && modelData} />
//     </div>
//     <div className='flex-wrap-center'>
   
      
//       <Box sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
      
       
       
//         width: "100%",
//         height: "100%",

//       }} >
//         {modelData ?   modelData[0]?.listArray?.map((item) => (
//             <Card key={item._id} sx={{ width: 300, height: 200, margin:1,padding:1 , display:"flex", flexDirection:"row" , justifyContent: 'center',}}
           
//             >
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:"80%" , justifyContent: 'center',}}
//             onClick={() => handleClick(item)} 
//             >
//             <Image 
//             src={item.imageUrl}   
          
//             alt="Picture of the author"
//             width={100}
//             height={100}/>

//             <Typography variant="h6" gutterBottom style={{maxWidth: '80%', textAlign: 'center'}}>
//               {item.name.charAt(0).toUpperCase() + item.name.toLowerCase().slice(1)} 
//             </Typography>
    
//             </div>
//            <EditCatagories catagory={item} />
   
        
//             </Card> ))
//         : "loading....."}

//       </Box>
//       </div>
   
    
//     </div>
//   )
// }


