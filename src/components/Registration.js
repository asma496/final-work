import React from 'react'
import Header from './Header'

function Registration({handleNext, handleBack}) {
    return (
        <div>
            <Header handleNext={handleNext} handleBack={handleBack}/>
            <h3>Registration Form</h3>
            
        </div>
    )
}

export default Registration
