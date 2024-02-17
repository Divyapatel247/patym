import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Balance() {
  const [value,setValue] = useState(0);

  useEffect(()=>{
    const getBalance = async()=>{
      const res = await axios.get("http://localhost:3000/api/v1/account/balance",
      {
          headers:{
            Authorization : "Bearer " + localStorage.getItem("token")
          }
      })
      const balance =  parseFloat(res.data.balance.toFixed(2))
      setValue(balance)
    }
    getBalance()
  },[])
  
  return (
    <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
  )
}

export default Balance