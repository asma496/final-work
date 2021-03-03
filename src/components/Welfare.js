import React from 'react'
import Header from './Header'

function Welfare({handleNext, handleBack}) {
    return (
        <div>
            <Header handleNext={handleNext} handleBack={handleBack}/>
            <h3>Welfare form</h3>
            
        </div>
    )
}

export default Welfare
