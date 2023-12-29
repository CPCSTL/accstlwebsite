import React, { Fragment, useState, useEffect } from 'react'
import { Loader } from 'utils/loader'
import { getSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { autoSignIn } from 'store/actions/user.actions'

const CheckSession = props => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(async()=>{
         await  getSession().then(session=>{
            console.log(session,"checkSession");
            if(session){
                 dispatch(autoSignIn()).then(()=>setLoading(false)).catch(err=>setLoading(false))
            } else {
                setLoading(false)
            }
        })
        .catch(err=>setLoading(false))
       
    },[])

    if(loading){
        return <Loader full={true} />
    }

  return (
    <Fragment>
    {props.children}
    </Fragment>
  )
}



export default CheckSession