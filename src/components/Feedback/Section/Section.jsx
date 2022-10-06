import PropTypes from 'prop-types'


export function Section({ title, children }) {
    return (<section>
               {title&& <h2>{title}</h2>}
                {children}
            </section>)
}


Notification.propTypes = {
    title:PropTypes.string
}
