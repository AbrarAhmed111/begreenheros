import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

export default function SuccessModal() {
    const { isSuccessOpen, closeSuccess } = useModal();

    return (
        <Modal
            open={isSuccessOpen}
            labelledBy="registration-success-title"
            panelClassName="relative max-w-xl rounded-mission bg-white p-8 text-center shadow-modal"
        >
            <button
                type="button"
                onClick={closeSuccess}
                className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-gray-100"
                aria-label="Close success modal"
            >
                <FaTimes />
            </button>
            <FaCheckCircle className="mx-auto mb-4 text-6xl text-green" />
            <h2
                id="registration-success-title"
                className="text-3xl font-bold text-dull-green"
            >
                Thank You for Registering!
            </h2>
            <p className="mt-3 text-muted">
                Your ITSC 2026 registration has been received in this static
                demo.
            </p>
            <img
                src="/img/bgh-logo.jpeg"
                alt="Be Green Heroes"
                className="mx-auto my-5 h-24 w-24 rounded-full object-cover"
            />
            <p className="mb-6 text-sm">
                Certificates and Green Hero Coin allocations are subject to the
                official competition rules and verification safeguards.
            </p>
            <Button onClick={closeSuccess}>Continue</Button>
        </Modal>
    );
}
