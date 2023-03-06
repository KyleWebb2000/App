import styles from '../components/layout.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const notFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 8000)
  }, [])

  return (
    <div className={styles.container}>
      <h1>Ooops...</h1>
      <h2>It looks like you're lost...</h2>
      <p>Wait while we redirect you</p>
      <p>Or click <Link href={`/`}>here</Link> to be redirected to the home page.</p>
    </div>
  );
}

export default notFound;