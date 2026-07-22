function SectionTitle({ subtitle, title, description }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 font-medium uppercase tracking-wide mb-3">
                {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl text-slate-900">
                {title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;