import type { FormEvent } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.info(
            "Static contact form submitted",
            new FormData(event.currentTarget),
        );
    };

    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base font-normal text-body placeholder:text-gray-400 outline-none transition focus:border-green focus:ring-4 focus:ring-green/10";

    return (
        <section className="mx-auto max-w-5xl px-2 py-6 sm:px-4 sm:py-8">
            <div className="mb-8 text-center sm:mb-10">
                <h1 className="text-[32px] font-bold text-dull-green sm:text-[40px] md:text-[61px]">
                    Get In Touch
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-base text-muted sm:text-lg">
                    We&apos;d love to hear from you. Send us your questions,
                    ideas, or feedback.
                </p>
            </div>

            <div className="overflow-hidden rounded-[25px] bg-white shadow-card lg:grid lg:grid-cols-[5fr_9fr]">
                <div className="bg-gradient-to-b from-[#147151] to-[#07885a] p-7 text-white sm:p-8 lg:p-10">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Let&apos;s Connect
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
                        Have questions about BE GREEN HEROES? Feel free to
                        contact us anytime.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3D9677] text-xl">
                                <FaEnvelope aria-hidden="true" />
                            </span>
                            <a
                                href="mailto:elsamateos@begreenheroes.com"
                                className="break-all text-lg hover:underline sm:text-xl"
                            >
                                elsamateos@begreenheroes.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3D9677] text-xl">
                                <FaMapMarkerAlt aria-hidden="true" />
                            </span>
                            <span className="text-lg sm:text-xl">Canada</span>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={submit}
                    className="space-y-5 p-8 sm:space-y-6 sm:p-10 lg:p-12"
                >
                    <label className="block text-base font-semibold text-body">
                        Full Name
                        <input
                            name="name"
                            placeholder="Enter your name"
                            className={inputClass}
                        />
                    </label>
                    <label className="block text-base font-semibold text-body">
                        Email Address
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className={inputClass}
                        />
                    </label>
                    <label className="block text-base font-semibold text-body">
                        Subject
                        <input
                            name="subject"
                            placeholder="Enter subject"
                            className={inputClass}
                        />
                    </label>
                    <label className="block text-base font-semibold text-body">
                        Message
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Write your message"
                            className={`${inputClass} resize-y`}
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-br from-green to-dull-green px-4 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
