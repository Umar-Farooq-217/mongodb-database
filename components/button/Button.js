'use client'
import React, { useState } from 'react';
import Modal from '../model/Model';

export default function Button(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button
                className="px-6 py-2 mb-5 mr-1 text-sm font-bold text-white uppercase transition-all 
                duration-150 ease-linear bg-blue-500 rounded-md shadow outline-none active:bg-blue-600
                 hover:shadow-lg focus:outline-none mt-5 ml-5 "
                onClick={openModal}>{props.title}</button>
            {showModal && <Modal onClose={closeModal} />}
        </div>
    );
}
