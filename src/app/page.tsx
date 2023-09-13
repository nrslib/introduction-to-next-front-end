import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
    const padding = (num: number, digit: number) => {
        const pad = "0".repeat(digit)
        return (pad + num).slice(-digit)
    }

    const length = 13
    const linkRows = []
    for (let i = 0; i < length; i++) {
        const id = padding(i + 1, 2)
        const tableRow = (
            <tr key={`tr-${id}`}>
                <td>
                    <Link href={"/base/" + id}>{id}</Link>
                </td>
                <td key={`sampleList${id}`}>
                    <Link href={"/sample/" + id}>{id}</Link>
                </td>
            </tr>
        )
        linkRows.push(tableRow)
    }

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div>
                <br/>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <br/>
                <br/>
            </div>

            <div>
                <p>
                    <Link href="/base/00">Go Test</Link>
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>Base</th>
                        <th>Sample</th>
                    </tr>
                    </thead>
                    <tbody>
                    {linkRows}
                    <tr key={`tr-ex`}>
                        <td>
                        </td>
                        <td key={`sampleListEx`}>
                            <Link href={"/sample/ex"}>ex</Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a>
            </div>
        </main>
    )
}
