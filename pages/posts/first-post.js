import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from 'components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

            <Image
                src="/images/work from home.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Your Name"
            />

        </Layout>
    )
}