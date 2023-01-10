import arrowB from '../assets/img/flechaB.svg';
import arrowN from '../assets/img/flechaN.svg';

const NextSeccion = ({theme = 'black'}) => {
	return(
		<div className="text-center" style={{ paddingTop: "80px" }} >
            <hr className={`${theme === 'white' ? 'border-white' : 'border-black'}`} />
            <img src={theme === 'white' ? arrowB : arrowN} style={{ cursor: "Pointer" }} alt="" />
        </div>
	)
}

export default NextSeccion;