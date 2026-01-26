
import './App.css'
import PropTypes from 'prop-types'

const Lightbox = ({ isVisible }) => {



    return (
        <>
            <div className={`lightbox ${isVisible ? 'visible' : ''}`}>
                <div className="lightbox-content">
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                </div>
            </div>

        </>
    )
}

Lightbox.propTypes = {
    isVisible: PropTypes.bool,
}

export default Lightbox
