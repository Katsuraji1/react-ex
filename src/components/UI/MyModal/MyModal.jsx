import React from "react";
import cl from './MyModal.module.css'

function MyModal({children, visible, setVisible}) {

    const rootClass = [cl.MyModal]

    if(visible) {
        rootClass.push(cl.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClass.join(' ')}>
            <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;