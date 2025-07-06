import Script from "next/script";

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Fahreza Pratama Hidayat",
        jobTitle: "Software Engineering Student",
        affiliation: {
            "@type": "EducationalOrganization",
            name: "Institut Teknologi Garut",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Garut",
                addressCountry: "Indonesia",
            },
        },
        alumniOf: "Institut Teknologi Garut",
        knowsAbout: [
            "Software Engineering",
            "Web Development",
            "Programming",
            "Database Systems",
            "Software Design",
        ],
        url: "https://your-domain.com",
        sameAs: [
            "https://github.com/fahrezapratamahidayat",
            "https://www.linkedin.com/in/fahreza-pratamah-a7b209279/",
            "https://twitter.com/fahreza_pratama",
        ],
        identifier: "2206144",
    };

    return (
        <Script
            id='structured-data'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
