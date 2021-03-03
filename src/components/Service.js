import React from 'react'
import Header from './Header'

function Service({handleNext, handleBack}) {
    return (
        <div>
            <Header handleNext={handleNext} handleBack={handleBack}/>
            <h3>Our Service</h3>
            
        </div>
    )
}

export default Service
