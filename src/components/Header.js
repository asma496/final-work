import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Header({handleNext, handleBack}) {
    return (
        <div>
            <h1>
            <ArrowBackIcon onClick={handleBack} className='arrow1'   variant="contained"
                color="primary"/>
            <ArrowForwardIcon onClick={handleNext}  className='arrow2'   variant="contained"
                color="primary"/>
            </h1>
        </div>
    )
}

export default Header
