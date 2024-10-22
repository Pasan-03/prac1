import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import styles from './page.module.css'; // Correct import path for the CSS module

export default function Home() {
  return (
    <div className={styles.container}> {/* Use styles from the CSS module */}
      <h1 className={styles.heading}>Welcome to My Simple Next.js Page</h1>
      <p className={styles.text}>This is a simple page showcasing images and text.</p>

      <div className={styles.imageContainer}>
        <Image
          src="/example1.jpg" // Ensure this image is in the public folder
          alt="Example Image 1"
          width={500}
          height={300}
        />
        <Image
          src="/example2.jpeg" // Ensure this image is in the public folder
          alt="Example Image 2"
          width={500}
          height={300}
        />
      </div>

      <p className={styles.text}>Enjoy browsing through these images!</p>

      {/* Corrected Link to the About page */}
      <Link href="/about" className={styles.text}>
        Go to About Page {/* No inner <a> tag needed */}
      </Link>
    </div>
  );
}
