import { NextPageContext } from 'next';

export type PageProps = {
    title: string;
    users: User;
};

export type User = {
    name: string;
    title: string;
}
  
export type PageContext = NextPageContext & {
    query: PageProps;
};
