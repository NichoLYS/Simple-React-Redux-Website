import ReactDOM from 'react-dom';

const BackdropOverlay = () => {
    return(
        <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75' />
    )
}

const ModalOverlay = (props) => {
    return(
        <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30'>
            <div className='bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2'>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById("modal")

const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<BackdropOverlay/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal