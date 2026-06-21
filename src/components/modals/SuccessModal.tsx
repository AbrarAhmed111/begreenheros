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
            panelClassName="relative max-w-xl rounded-mission bg-white p-5 text-center shadow-modal sm:p-8"
        >
            <button
                type="button"
                onClick={closeSuccess}
                className="absolute right-3 top-3 rounded-full p-2 text-muted hover:bg-gray-100 sm:right-4 sm:top-4"
                aria-label="Close success modal"
            >
                <FaTimes />
            </button>
            <FaCheckCircle className="mx-auto mb-4 text-5xl text-green sm:text-6xl" />
            <h2
                id="registration-success-title"
                className="text-2xl font-bold text-dull-green sm:text-3xl"
            >
                Thank You for Registering!
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
                Your ITSC 2026 registration has been received in this static
                demo.
            </p>
            <img
                src="/img/bgh-logo.jpeg"
                alt="Be Green Heroes"
                className="mx-auto my-5 h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
            />
            <p className="mb-5 text-xs sm:mb-6 sm:text-sm">
                Certificates and Green Hero Coin allocations are subject to the
                official competition rules and verification safeguards.
            </p>
            <Button className="w-full sm:w-auto" onClick={closeSuccess}>
                Continue
            </Button>
        </Modal>
    );
}
