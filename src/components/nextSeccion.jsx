import arrowB from '../assets/img/flechaB.svg';
import arrowN from '../assets/img/flechaN.svg';

const NextSeccion = ({theme = 'black', visibleLine = true, hiddenMovil = true}) => {
	return(
		<div className={`text-center next-section container-fluid w-14 ${hiddenMovil && ('hidenMovil')}`} >
            <hr className={`${theme === 'white' ? 'border-white' : 'border-black'} m-0 mb-4 w-100 ${!visibleLine && ('invisible')}`} />
            <img src={theme === 'white' ? arrowB : arrowN} style={{ cursor: "Pointer" }} alt="" />
        </div>
	)
}

export default NextSeccion;