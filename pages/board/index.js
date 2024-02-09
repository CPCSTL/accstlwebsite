import Base from '@layouts/Baseof';
import { Box } from '@mui/material';
import React from 'react';

const index = () => {
    return (
        <Base>
        <div className="flex-col w-full justify-center  text-center lg:px-10  ">
        <h5 className="pb-10 pt-10">Arab Culture Center Board Members </h5>
        <section id="team" className="bg-gray-100 py-5 mb-6">
            <div className="container mx-auto px-4">
                {/* Section Title */}
              

                {/* Officers */}
                <div className="mb-2">
                    <div className="text-center mb-2">
                        <h2 className="text-2xl font-semibold">Officers</h2>
                    </div>
                    {/* Officers Grid */}
                    
                    <Box 
                    sx={{
                        display:"flex",
                        flexWrap:{
                            xs:"wrap",
                            md:"nowrap",
                        
                        },
                        justifyContent:"center",
                        px:{
                            xs:"0",
                            sm:15,
                            md:12,
                        
                        },
                        gap:"10px",
                        mb:5,
                        pb:6,
                        borderBottom:"1px solid #e2e8f0",
                    }}
                    >
                        {/* Officer Card */}
                     
                         <div className=" ">
                         <div className="bg-white min-w-full px-5 min-h-full flex-col rounded-lg shadow-md overflow-hidden">
                             <img src="https://accstl.org/assets/img/team/team-1.jpg" alt="Mohammad Abdulfatah" className="w-full h-50  object-center" />
                           <div className="flex flex-col align-start justify-items-center">
                                <h5 className=" text-center">Mohammad Abdulfatah</h5>
                                 <p className="text-gray-600">President of ACC</p>
                                 
                             </div>
                         </div>
                       </div>
                         <div className=" ">
                         <div className="bg-white min-w-full px-5 min-h-full  flex-col rounded-lg shadow-md overflow-hidden">
                             <img src="https://accstl.org/assets/img/team/team-2.jpg" alt="Mohammad Abdulfatah" className="w-full h-50  object-center" />
                             <div className="flex flex-col align-start justify-items-center">
                                 <h5 className=" text-center">Shadi Alkhazaaleh</h5>
                                 <p className="text-gray-600">Secretary of ACC</p>
                                 
                             </div>
                         </div>
                       </div>
                         <div className=" ">
                         <div className="bg-white min-w-full px-5  min-h-full  flex-col rounded-lg shadow-md overflow-hidden">
                             <img src="https://accstl.org/assets/img/team/team-11.jpg" alt="Mohammad Abdulfatah" className="w-full h-50  object-center" />
                             <div className="flex flex-col align-start justify-items-center h-100%">
                                 <h5 className=" text-center">Talal AbouChleih</h5>
                                 <p className="text-gray-600">Treasurer of ACC</p>
                                 
                             </div>
                         </div>
                       </div>
                        
                    

                   

                      
                       
                         
                        {/* ... other officers */}
                    </Box>
                </div>

                {/* Board of Directors */}
                <div>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold">Board of Directors</h2>
                    </div>
                    {/* Directors Grid */}
                    <div className="flex flex-wrap justify-center">
                        {/* Director Card */}
                       {/* Member Card */}
                    
                            {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-14.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Layla Azmi Goushey</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                    

                       <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-13.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Fida Ahmed Barakat</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 


                 
                        {/* ... other directors */}
                   
                        {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-10.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Mustafa Rfat</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                   
                  

                     {/* ... other directors */}

                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-22.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Muhammad Yadak</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-9.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Hala Karttan</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                  
                  
                     
                        {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-16.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Rashad Alhachami</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                        {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-17.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Noor Alfityaan</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                       
                     {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-21.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Fatimah Alkhshali</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                   
                        {/* ... other directors */}
                    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img src="https://accstl.org/assets/img/team/team-20.jpg" alt="Talal AbouChleih" className="w-full h-56 object-center md:object-cover" />
                            <div className="p-4">
                             <h4 className="text-lg font-semibold">Ibtisam Al-Dhari</h4>
                             <div className="flex justify-center mt-3">
                             <a href="#" className="text-blue-600 hover:text-blue-800">
                             <i className="bi bi-linkedin"></i>
                             </a>
                          </div>
                         </div>
                        </div>
                     </div> 
                    
                        {/* ... other directors */}
                   
                        {/* ... other directors */}




                    </div>
                </div>
            </div>
        </section>
        </div>
        </Base>
    );
};

export default index;
