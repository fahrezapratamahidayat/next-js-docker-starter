export default function Hero() {
    return (
        <section className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
            <div className='container mx-auto px-4 text-center'>
                <h1 className='text-5xl font-bold text-gray-900 mb-6'>
                    Welcome to Our Amazing Landing Page
                </h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                    This is a simple, fast, and beautiful landing page built
                    with Next.js and Docker
                </p>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
                    Get Started
                </button>
            </div>
        </section>
    );
}
