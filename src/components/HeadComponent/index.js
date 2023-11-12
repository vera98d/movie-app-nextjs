import Head from 'next/head';

export default function HeadComponent({ metadata }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={`movie, cinematography, ${metadata.title}`}></meta>
        </Head>
    );
}
