import arrowB from '../assets/img/flechaB.svg';
import arrowN from '../assets/img/flechaN.svg';

const NextSeccion = ({theme = 'black', visibleLine = true, hiddenMovil = true, className}) => {
	return(
		<div className={`text-center next-section container-fluid w-14 ${hiddenMovil && ('hidenMovil')} ${className}`} >
            <hr className={`${theme === 'white' ? 'border-white' : 'border-black'} m-0 mb-4 w-100 ${!visibleLine && ('invisible')}`} />
            <img className='animate__animated animate__fadeInDown animate__infinite animate__slow animate__delay-2s' src={theme === 'white' ? arrowB : arrowN} style={{ cursor: "Pointer" }} alt="" width={"12px"} height={"12px"} />
        </div>
	)
}

export default NextSeccion;