import Link from "next/link";
import styles from "@/app/page.module.css";

export type Props = {
    children?: React.ReactNode
}

export default function Main({ children }: Readonly<Props>) {
    return (
        <div className={styles.main}>
            {children}

            <div className={styles.grid}>
                <Link href="/">
                    <h2>
                        <span>&lt;-</span> Go Back
                    </h2>
                    <p>Go back.</p>
                </Link>
            </div>
        </div>
    )
}