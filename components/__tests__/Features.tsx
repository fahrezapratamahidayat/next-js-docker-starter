export default function Features() {
    const features = [
        {
            title: "Fast",
            description: "Built with Next.js for optimal performance",
        },
        { title: "Secure", description: "SSL encryption and security headers" },
        {
            title: "Scalable",
            description: "Docker containerization for easy scaling",
        },
    ];

    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Why Choose Us
                </h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='text-center p-6 border rounded-lg'
                        >
                            <h3 className='text-xl font-semibold mb-4'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-600'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
