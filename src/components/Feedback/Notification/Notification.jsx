import PropTypes from 'prop-types'


const Notification = ({message}) => (
    <div>
        <p>{message}</p>
    </div>
)

export default Notification


Notification.propTypes = {
    message:PropTypes.string
}
