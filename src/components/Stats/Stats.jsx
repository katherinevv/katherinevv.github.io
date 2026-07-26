import "./Stats.css";

const STATS = [
    { value: "1 Year", label: "Intern Experience" },
    { value: "3.78", label: "/ 4.00 CGPA" },
    { value: "2", label: "Academic Works" },
    { value: "6+", label: "Projects" },
];

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="stats-container">
                {STATS.map((stat, i) => (
                    <div className="stats-item" key={i}>
                        <p className="stats-value">{stat.value}</p>
                        <p className="stats-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
