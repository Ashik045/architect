import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
    // github authentication
    providers: [
        GithubProvider({
            clientId: '',
            clientSecret: '',
        }),
    ],
});
