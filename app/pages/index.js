export default function Home() {
  const titles = [
    "Stranger Things",
    "The Crown",
    "Money Heist",
    "Wednesday",
    "Ozark",
    "Bridgerton",
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>NETFLIX CLONE</h1>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Unlimited movies, TV shows, and more</h2>
        <p style={styles.heroSubtitle}>
          A demo app powering a DevSecOps CI/CD pipeline.
        </p>
      </section>

      <section style={styles.row}>
        <h3 style={styles.rowTitle}>Trending Now</h3>
        <div style={styles.cardRow}>
          {titles.map((title) => (
            <div key={title} style={styles.card}>
              {title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#141414",
    color: "#ffffff",
    minHeight: "100vh",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  header: {
    padding: "20px 40px",
  },
  logo: {
    color: "#e50914",
    margin: 0,
    fontSize: "28px",
    letterSpacing: "2px",
  },
  hero: {
    padding: "60px 40px",
    borderBottom: "1px solid #333",
  },
  heroTitle: {
    fontSize: "36px",
    margin: "0 0 10px 0",
  },
  heroSubtitle: {
    fontSize: "16px",
    color: "#cccccc",
  },
  row: {
    padding: "30px 40px",
  },
  rowTitle: {
    fontSize: "20px",
    marginBottom: "16px",
  },
  cardRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#2b2b2b",
    borderRadius: "4px",
    padding: "30px 16px",
    width: "160px",
    textAlign: "center",
    fontSize: "14px",
  },
};
