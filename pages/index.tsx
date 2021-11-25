import type { NextPage } from 'next';
import { gql, useLazyQuery } from '@apollo/client';
import { Button } from '@chakra-ui/react';

const HELLOQUERY = gql`
    query SayHello {
        hello
    }
`;

const Home: NextPage = () => {
    const [getHello, { loading, data }] = useLazyQuery(HELLOQUERY);
    return (
      <>
          <div>Hello World</div>
          <Button isLoading={loading} onClick={() => getHello()}>Query API</Button>
          <div>{data && data.hello}</div>
      </>
    );
};

export default Home;
