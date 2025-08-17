const Toast = (props) => {
    return (
        <div class={`toast ${props.type} show`}>
            <div class="toast-content">
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </div>
            {props.onClose && (
                <button class="toast-close" onClick={props.onClose} aria-label="Close notification">
                    ×
                </button>
            )}
        </div>
    )
}

export default Toast;