import { NextPage } from 'next';
import react from 'react';
import {PageProps, PageContext} from 'src/types/page';

const Home: NextPage<PageProps> = ({title, users}) => {
    return (
        <>
            <h1>{title}</h1>
            <div>{users.title} {users.name}</div>
        </>
    );
};

Home.getInitialProps = (ctx: PageContext) => {
    return {
        title: ctx.query.title,
        users: ctx.query.users,
    };
};

export default Home;