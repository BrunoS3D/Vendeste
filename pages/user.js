import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const Index = ({ user }) => {
    const { name, username, email, wishlist } = user;

    return (
        <>
            <Page title="Vendesto - Inicio">
                <Navbar />
                <h1>User</h1>
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
                <p>Nome de usuário: {username}</p>
                {wishlist &&
                    wishlist.map((item, id) => (
                        <p key={id}>
                            {item.product}: {item.price}
                        </p>
                    ))}
            </Page>
        </>
    );
};

Index.getInitialProps = async ({ req, query }) => {
    let { user } = query;

    console.log(user);

    if (!user) {
        const response = await APIGet(req, "/user");
        user = response.data;
    }

    console.log(user);

    return { user, ...query };
};

export default Index;
