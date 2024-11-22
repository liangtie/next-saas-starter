import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import Page from 'components/Page';
import { getAllPosts } from 'utils/postsFetcher';
import KiCadReleaseHistory from 'views/HomePage/KiCadReleaseHistory';
import FaqSection from 'views/PricingPage/FaqSection';

export default function PricingPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="KiCad Huaqiu Distribution" description="">
      <Wrapper>
        <KiCadReleaseHistory  posts={posts} />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;


export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
