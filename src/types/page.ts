import { NextPageContext } from 'next';

export type PageProps = {
    title: string;
};
  
export type PageContext = NextPageContext & {
    query: PageProps;
};
