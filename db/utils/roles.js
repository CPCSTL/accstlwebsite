import { AccessControl } from 'accesscontrol';

let grantsObject = {
    admin:{
        shows:{
            'create:any':['*'],
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
        },
        statements:{
            
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
         
        },
    },
    president:{
        statements:{
            'create:any':['*'],
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
        }
    },
    user:{
        shows:{
            'read:any':['*']
        },
        
    },
    dev:{
        shows:{
            'create:any':['*'],
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
        },
        statements:{
            'create:any':['*'],
            'read:any':['*'],
            'update:any':['*'],
            'delete:any':['*'],
        }
    }
}

const roles = new AccessControl(grantsObject)
export default roles;