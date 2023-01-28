import arrowB from '../assets/img/flechaB.svg';
import arrowN from '../assets/img/flechaN.svg';

const NextSeccion = ({theme = 'black', visibleLine = true}) => {
	return(
		<div className="text-center next-section" >
            {
                visibleLine && (
                    <hr className={`${theme === 'white' ? 'border-white' : 'border-black'} m-0 mb-1 w-100`} />
                )
            }
            <img src={theme === 'white' ? arrowB : arrowN} style={{ cursor: "Pointer" }} alt="" />
        </div>
	)
}

export default NextSeccion;