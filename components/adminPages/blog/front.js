import React from 'react'
import {getStorage} from 'firebase/storage'
import { Box } from '@mui/material'


const storage = getStorage()

const BlogContainer = () => {
    const [file, setFile] = useState(null)
  return (
    <Box>
    <input type="file" onChange={(e)=>{
        setFile(e.target.files[0])
    } }

    />
    
    </Box>
  )
}

export default BlogContainer