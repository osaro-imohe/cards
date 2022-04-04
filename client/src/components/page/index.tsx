/* eslint-disable no-use-before-define */
import Container from '../container';
import { PageProps } from '../../types/components';
import Navbar from '../navbar';

const Page = ({ children }: PageProps) => (
  <Container
    fullWidth
    fullHeight
    overflow="scroll"
    paddingBottom="33px"
    backgroundColor="white"
  >
    <Navbar />
    {children}
  </Container>
);

export default Page;
