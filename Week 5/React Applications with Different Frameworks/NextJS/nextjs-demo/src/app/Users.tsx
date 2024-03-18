// pages/users.tsx

import { useRouter } from 'next/router';
import Head from 'next/head';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = ({ user }: { user: User }) => {
    const router = useRouter();

    // If the page is not yet generated, return a loading message
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>User Profile: {user.name}</title>
    </Head>

    <div>
    <h1>User Profile</h1>
    <p>ID: {user.id}</p>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    </div>
    </>
);
};

export async function getStaticPaths() {
    // Fetch user IDs from the API to generate dynamic paths
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    // Generate paths for each user ID
    const paths = users.map((user: User) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    // Fetch user data based on the dynamic route parameter
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return { props: { user } };
}

export default UserPage;
