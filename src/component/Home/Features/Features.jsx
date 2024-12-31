const FeatureItem = ({ imgSrc, title, description, link }) => (
    <div className="text-left pb-8 pl-[30px] relative  flex gap-6">
        <img
            alt={title}
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            className="undefined w-12 h-12"
            style={{ color: 'transparent' }}
            srcSet={`${imgSrc}?fit=max&auto=format&h=1080&w=1080 1x, ${imgSrc}?fit=max&auto=format&h=2048&w=2048 2x`}
            src={`${imgSrc}?fit=max&auto=format&h=2048&w=2048`}
        />
        <div>
            <p className="text-primary-dark_gray mb-4 base:text-lg2 base:my-0 lg:my-0 text-lg font-semibold">{title}</p>
            <div>
                <p className="text-base font-normal leading-6 text-primary-dark_gray">{description}</p>
            </div>
        </div>
    </div>
);

export default function Features() {
    const features = [
        {
            imgSrc: "https://cdn.sanity.io/images/43ea2a5t/csod-new/e343eb053a9326c54259e7096a41e53414187654-48x48.svg",
            title: "Personalized learning paths",
            description: "Create tailored learning experiences for every role, department, or individual. Cornerstone allows you to customize learning paths for all employees, virtual or in-person."
        },
        {
            imgSrc: "https://cdn.sanity.io/images/43ea2a5t/csod-new/99def9628eea103d40d71c20c802e1ade673af2e-48x48.svg",
            title: "Centralized content and data",
            description: "Simplify learning management by consolidating all videos, documents, and interactive content in one platform. Update and track materials in real time for a seamless team experience."
        },
        {
            imgSrc: "https://cdn.sanity.io/images/43ea2a5t/csod-new/3d42d42236e5f735cfda3e6a3774d1cbe6b080eb-48x48.svg",
            title: "Compliance made simple",
            description: "Ensure you are compliant with regulations. Automate workflows, track progress, and be audit ready. Stay ahead of compliance for industry-specific regulations or certifications with Cornerstone LMS."
        },
        {
            imgSrc: "https://cdn.sanity.io/images/43ea2a5t/csod-new/141ec60c87ced9a0711c910f1b579fb478ee7c81-48x48.svg",
            title: "Advanced analytics and reporting",
            description: "Gain visibility into learning progress with customizable dashboards. Analyze outcomes, identify skill gaps, track training, and ensure compliance. Use insights to refine your training and improve performance."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-x-10 gap-y-16   self-end">
            {features.map((feature, index) => (
                <FeatureItem
                    key={index}
                    imgSrc={feature.imgSrc}
                    title={feature.title}
                    description={feature.description}
                    link={feature.link}
                />
            ))}
        </div>
    );
}