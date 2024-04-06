/* eslint-disable react/prop-types */
export function InfoCard({ title, imageSrc, altText, description }) {
    return (
        <div className="inner-section">
            <h2 className="initial-text">{title}</h2>
            <img src={imageSrc} alt={altText} className="section-image" />
            <p className="section-text">{description}</p>
        </div>
    );
}
