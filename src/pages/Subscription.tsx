import { FaLeaf, FaUniversity, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Quote } from "../components/ui/Quote";

const plans = [
    {
        title: "Free Access",
        subtitle: "Explore and begin your sustainability journey.",
        features: [
            "Access to all learning modules",
            "Standard coin earning limits",
            "No Question & Point feature",
        ],
        icon: FaLeaf,
        className: "border bg-white text-body",
        action: "Get Started",
        to: "/learn",
    },
    {
        title: "Individual Membership",
        subtitle: "Learn Deeper. Earn More.",
        features: [
            "Higher coin earning limits",
            "Question & Point feature",
            "Personalized learning content",
        ],
        icon: FaUser,
        className: "bg-green text-white",
        action: "Join Now",
        to: "/individual",
    },
    {
        title: "Institutional Membership",
        subtitle: "Empower Your Entire Community.",
        features: [
            "All Individual benefits",
            "Collective coin limits",
            "Q & A feature for your institution",
        ],
        icon: FaUniversity,
        className: "bg-blue text-white",
        action: "Get Started",
        to: "/institutional",
    },
];

export default function Subscription() {
    return (
        <section className="mx-auto max-w-content px-2 py-6 sm:p-8">
            <Quote>Power Belongs to the Informed</Quote>
            <div className="my-10 text-center">
                <h1 className="text-3xl font-bold text-green">
                    Choose Your Membership Plan
                </h1>
                <p className="text-muted">
                    Upgrade Your Impact & Empower Learning
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map(
                    ({
                        title,
                        subtitle,
                        features,
                        icon: Icon,
                        className,
                        action,
                        to,
                    }) => (
                        <article
                            key={title}
                            className={`flex h-full flex-col rounded-mission p-7 text-center shadow-md ${className}`}
                        >
                            <Icon className="mx-auto text-5xl" />
                            <h2 className="mt-4 text-2xl font-bold">{title}</h2>
                            <p className="mt-3 text-sm italic opacity-80">
                                {subtitle}
                            </p>
                            <hr className="my-5 opacity-40" />
                            <ul className="space-y-3 text-left">
                                {features.map((feature) => (
                                    <li key={feature}>• {feature}</li>
                                ))}
                            </ul>
                            <Link to={to} className="mt-auto pt-7">
                                <span className="inline-block rounded-lg border border-current px-6 py-2.5 font-semibold transition hover:scale-105">
                                    {action}
                                </span>
                            </Link>
                        </article>
                    )
                )}
            </div>
            <div className="mt-12">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Institutional Pricing
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-center">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-3">Category</th>
                                <th className="border p-3">Member Size</th>
                                <th className="border p-3">Annual Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [
                                    "Small Institution",
                                    "Under 500 Members",
                                    "$1,000 / year",
                                ],
                                [
                                    "Medium Institution",
                                    "500 - 1,000 Members",
                                    "$3,000 / year",
                                ],
                                [
                                    "Large Institution",
                                    "Over 1,000 Members",
                                    "$5,000 / year",
                                ],
                            ].map((row) => (
                                <tr key={row[0]}>
                                    {row.map((cell, index) => (
                                        <td
                                            key={cell}
                                            className={`border p-3 ${
                                                index === 0 ? "font-bold" : ""
                                            }`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-center">
                    Example: Schools or companies with 1,000 to 5,000 students,
                    staff, or employees can enroll as an institution for $3,000
                    per year.
                </p>
            </div>
            <div className="mt-12 text-center">
                <h2 className="mb-6 text-2xl font-semibold">
                    Upgrade Your Impact. Choose Your Path.
                </h2>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        to="/individual"
                        className="rounded-lg bg-green px-7 py-3 font-semibold text-white"
                    >
                        Join Individual
                    </Link>
                    <Link
                        to="/institutional"
                        className="rounded-lg bg-blue px-7 py-3 font-semibold text-white"
                    >
                        Enroll Institution
                    </Link>
                </div>
            </div>
        </section>
    );
}
