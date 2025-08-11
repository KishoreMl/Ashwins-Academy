import { createSignal } from 'solid-js';
import CallMeBackModal from './CallMeBackModal';

const ModalExample = () => {
    const [isModalOpen, setIsModalOpen] = createSignal(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Button to trigger modal */}
            <button class="cta-button" onClick={openModal}>
                Open Modal Example
            </button>

            {/* Modal Component - Only renders when isModalOpen is true */}
            {isModalOpen() && (
                <CallMeBackModal 
                    isOpen={isModalOpen()} 
                    onClose={closeModal} 
                />
            )}
        </div>
    );
};

export default ModalExample;