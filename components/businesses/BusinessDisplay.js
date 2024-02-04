import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const businesses = [
    // Middle Eastern Restaurants
    {"category": "Financial Services", "name": "Global Tax & Finance", "address": "4500 Telegraph STE 202, St. Louis MO 63129", "phone": "314-690-1670", "email": "Nadya@gtfmo.com"},
        {"category": "Phone/Repair Store", "name": "Phone Geeks", "address": "141 Arnold Crossroads Center, Arnold, MO 63010", "phone": "(314) 333-3324"},
    {"category": "Phone/Repair Store", "name": "Phone Zone - Repair and Phones", "address": "14748 Manchester Rd, Ballwin 63011", "phone": "636-256-1702"},
    {"category": "Phone/Repair Store", "name": "St.louis Phone Center", "address": "6921 Gravois Ave, St.louis 63116", "phone": "314-688-9006"},

    {"category": "Middle Eastern Restaurant", "name": "Sultan Mediterranean Restaurant", "address": "4200 Manchester Ave, St. Louis", "phone": "(314) 390-2020"},
    {"category": "Middle Eastern Restaurant", "name": "Ranoush", "address": "386 N Euclid Ave, St. louis", "phone": "(314) 833-4400"},
    {"category": "Middle Eastern Restaurant", "name": "Majeed Mediterranean Restaurant", "address": "4601 Gravois Ave, St. Louis", "phone": "(314) 282-0981"},
    {"category": "Middle Eastern Restaurant", "name": "Taste Of Lebanon", "address": "331 N Euclid Ave, St. Louis", "phone": "(314) 875-0657"},
    {"category": "Middle Eastern Restaurant", "name": "Medina Grill", "address": "5 Maryland Plaza, St. Louis", "phone": "(314) 240-5301"},
    {"category": "Middle Eastern Restaurant", "name": "Aya Sofia Restaurant", "address": "6671 Chippewa St, St. Louis", "phone": "(314) 645-9919"},
    {"category": "Middle Eastern Restaurant", "name": "Royal Kebab Persian Cuisine", "address": "3611 Bates St. St. Louis", "phone": "(314) 571-9971"},
    {"category": "Middle Eastern Restaurant", "name": "The Vine Cafe and Market", "address": "3171 S Grand Blvd", "phone": "(314) 776-0991"},
    {"category": "Middle Eastern Restaurant", "name": "Sheesh", "address": "3226 S Grand Blvd, St. Louis", "phone": "(314) 833-4321"},
    {"category": "Middle Eastern Restaurant", "name": "Medina Grill", "address": "3325 Olive St, St. Louis", "phone": "(314) 925-8303"},
    {"category": "Middle Eastern Restaurant", "name": "Original Shawarma House", "address": "14560 Manchester, St. Louis, Mo. 63011", "phone": "(636) 220-2524"},
    {"category": "Middle Eastern Restaurant", "name": "Medina Grill", "address": "1327 Washington Ave, St. Louis", "phone": "(314) 241-1356"},
    {"category": "Middle Eastern Restaurant", "name": "Sameem Afghan Restaurant & Catering", "address": "4341 Manchester Ave, St. Louis", "phone": "(314) 534-9500"},
    {"category": "Middle Eastern Restaurant", "name": "Yapi Mediterranean Subs and Sandwiches", "address": "17 S Vandeventer Ave, St. Louis", "phone": "(314) 354-8333"},
    {"category": "Middle Eastern Restaurant", "name": "Ranoush", "address": "6501 Delmar Blvd, University City, MO" , "phone": "(314) 726-6874"},
    {"category": "Middle Eastern Restaurant", "name": "Gyro Grill", "address": "6227 Delmar Blvd, St. Louis", "phone": "(314) 899-9437"},
    {"category": "Middle Eastern Restaurant", "name": "The Benevolent King", "address": "7268 Manchester Rd, St. Louis", "phone": "(314) 899-0440"},
    {"category": "Middle Eastern Restaurant", "name": "Pan D'Olive", "address": "1603 McCausland Ave, St. Louis", "phone": "(314) 647-8000"},
    {"category": "Middle Eastern Restaurant", "name": "Olympia Kebob House and Taverna", "address": "1543 McCausland Ave, St. Louis", "phone": "(314) 781-1299"},
    {"category": "Middle Eastern Restaurant", "name": "Taste of Persia", "address": "3189 1/2 S Grand Blvd, St. Louis", "phone": "(314) 349-1315"},
    {"category": "Middle Eastern Restaurant", "name": "Cafe Nova", "address": "5611 S Kingshighway Blvd", "phone": "(314) 351-7443"},
  
    // Immigration Attorneys
    {"category": "Immigration Attorney", "name": "Hacking Immigration Law, LLC", "address": "500 N Broadway Suite 1860C", "phone": "(314) 961-8200"},
    {"category": "Immigration Attorney", "name": "EMC Immigration Law", "address": "3 S Newstead Ave FL 2", "phone": "(314) 279-6168"},
    {"category": "Immigration Attorney", "name": "Cofman & Bolourtchi, LLC", "address": "1034 South Brentwood Blvd, 23th Floor, Suite PH-1B", "phone": "(314) 863-3838"},
    {"category": "Immigration Attorney", "name": "CG Immigration Law", "address": "2714 Cherokee St", "phone": "(314) 514-4248"},
    {"category": "Immigration Attorney", "name": "Khazaeli Wyrsch LLC", "address": "911 Washington Ave #211", "phone": "(314) 288-0777"},
    {"category": "Immigration Attorney", "name": "Nalini S. Mahadevan, JD MBA, MLO Law LLC", "address": "Clayton, MO", "phone": "(314) 932-7111"},
    {"category": "Immigration Attorney", "name": "Haque Law Practice LLC", "address": "2859 Sidney St", "phone": "(314) 435-9866"},
    {"category": "Immigration Attorney", "name": "Immigration Law Group LLC", "address": "Olivette, MO", "phone": "(314) 323-6022"},
    {"category": "Immigration Attorney", "name": "CoxEsq, PC", "address": "710 N Tucker Blvd #311", "phone": "(314) 827-5826"},
    {"category": "Immigration Attorney", "name": "The Hein Law Firm, L.C.", "address": "2001 S Hanley Rd Suite 100", "phone": "(314) 645-7900"},
    {"category": "Immigration Attorney", "name": "Yi Sun & Associates LLC", "address": "8151 Clayton Rd #201", "phone": "(314) 863-8887"},
    {"category": "Immigration Attorney", "name": "Gonzalez Herrera Law Firm, LLC", "address": "3407 S Jefferson Ave Suite 003B", "phone": "(314) 637-9994"},
    {"category": "Immigration Attorney", "name": "Tony T Gao Law Office", "address": "8011 Clayton Rd #200", "phone": "(314) 725-6788"},
    {"category": "Immigration Attorney", "name": "American Immigration Law Group", "address": "1067 N Mason Rd Suite 4", "phone": "(314) 416-8000"},
    {"category": "Immigration Attorney", "name": "Greta Morina Immigration, LLC", "address": "3245 Lemay Ferry Rd", "phone": "(314) 809-9061"},
    {"category": "Immigration Attorney", "name": "The Law Offices of Pari Sheth", "address": "225 S Meramec Ave # 325", "phone": "(314) 614-3954"},
  
    // Hair Saloons
    {"category": "Hair Saloon", "name": "Barber shop", "address": "343 South Kirkwood Road", "phone": "(314) 821-4363"},
    {"category": "Hair Saloon", "name": "Yasser's BarberShop", "address": "St. Louis, MO", "phone": "(314) 349-1283" } 
];

  

const BusinessCard = ({ business }) => (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent>
            <Typography variant="h5">{business.name}</Typography>
            <Typography variant="body2" sx={{color:"blue"}}>
                <a href={`https://maps.google.com/?q=${business.address}`} target="_blank" rel="noopener noreferrer">
                    {business.address}
                </a>
            </Typography>
            {business.phone && (
                <Typography variant="body2" sx={{color:"#5072A7"}}>
                    <a href={`tel:${business.phone}`}>
                        Phone: {business.phone}
                    </a>
                </Typography>
            )}
            {business.email && (
                <Typography variant="body2" sx={{ color: "#5072A7" }}>
                    <a href={`mailto:${business.email}`}>
                        Email: {business.email}
                    </a>
                </Typography>
            )}
        </CardContent>
    </Card>
);



const CategoriesFilter = ({ onSelectCategory, selectedCategory }) => (
    <FormControl sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel sx={{width:"50%"}} id="category-select-label">Category</InputLabel>
        <Select
        sx={{width:{
            sx:"100%",
            md:"50%"


        }}}
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={(event) => onSelectCategory(event.target.value)}
        >
            <MenuItem value=""><em>Reset</em></MenuItem>
            
            <MenuItem value="Immigration Attorney">Immigration Attorney</MenuItem>
            <MenuItem value="Financial Services">Financial Services</MenuItem>
            <MenuItem value="Middle Eastern Restaurant">Middle Eastern Restaurants</MenuItem>
            <MenuItem value="Phone/Repair Store">Phone/Repair Stores</MenuItem>
           
            <MenuItem value="Hair Saloon">Hair Saloons</MenuItem>
            <MenuItem value="Grocery Store">Grocery Stores</MenuItem>
            
        </Select>
    </FormControl>
);


// const CategoriesFilter = ({ onSelectCategory }) => (
//     <Box sx={{ display:"grid",
//         gridTemplateColumns:{
//             xs:"repeat(2,1fr)",
//             sm:"repeat(2,1fr)",
//             md:"repeat(3,1fr)",
//             lg:"repeat(5,1fr)",
//             xl:"repeat(5,1fr)",
//         },
//         gridAutoRows:"minmax(75px,auto)",
//         gridGap:2,
//         width:"100%",
        
//         ml:"auto",
//         mr:"auto",
//         mb:2
// }}>
//         <Button variant="outlined" sx={{width:"100%"}} onClick={() => onSelectCategory('Middle Eastern Restaurant')}><p style={{width:"fit-content"}}>Middle Eastern Restaurants</p></Button>
//         <Button variant="outlined" sx={{width:"100%"}}  onClick={() => onSelectCategory('Immigration Attorney')}>Immigration Attorneys </Button>
//         <Button variant="outlined" sx={{width:"100%"}} onClick={() => onSelectCategory('Hair Saloon')}> Hair Saloons</Button>
//         <Button variant="outlined" sx={{width:"100%"}} onClick={() => onSelectCategory('Grocery Store')}>Grocery Stores</Button>
//         <Button variant="outlined" sx={{width:"100%"}} onClick={() => onSelectCategory('')}>Show All</Button>
//     </Box>
// );

const BusinessList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredBusinesses = selectedCategory
        ? businesses.filter(business => business.category === selectedCategory)
        : businesses;

    return (
        <Box sx={{
            mt: 9,
            width: '90%',
            ml: 'auto',
            mr: 'auto',
        }}>
            <CategoriesFilter onSelectCategory={setSelectedCategory} selectCategory={selectedCategory} />
            {filteredBusinesses.map((business, index) => (
                <BusinessCard key={index} business={business} />
            ))}
        </Box>
    );
};

export default BusinessList;
