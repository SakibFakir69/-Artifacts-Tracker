


import React, { useContext } from 'react'
import { MyContext } from '../Context/AuthContextapi'

function useAuth() {

    const auth = useContext(MyContext);
    return auth





}

export default useAuth