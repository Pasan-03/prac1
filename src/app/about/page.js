import styles from '../page.module.css'; // Correct path to the CSS module

export default function About() {
  return (
    <div className={styles.container}> {/* Use styles from the CSS module */}
      <h1 className={styles.heading}>About This Page</h1>
      <p className={styles.text}>
        This page provides information about the application.
      </p>
      <img
        src="/example1.jpg" // Example image from the public folder
        alt="Example Image"
        width={500}
        height={300}
      />
      <p className={styles.text}>This is a simple Next.js application.</p>
    </div>
  );
}
