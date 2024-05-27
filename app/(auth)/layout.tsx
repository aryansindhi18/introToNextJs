import React from "react"

export default function({children}:{
        children: React.ReactNode
}){
    return (
    <div>
        <div className="border-b p-1 text-center">
            Discounts Galore for the next few days, sign in now to avail..
        </div>
        {children}
    </div>
    ) 
}