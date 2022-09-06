import { NextPage } from 'next';
import {PageProps, PageContext} from 'src/types/page';

const Home: NextPage<PageProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    );
};

Home.getInitialProps = (ctx: PageContext) => {
    return {
        title: ctx.query.title,
    };
};

export default Home;