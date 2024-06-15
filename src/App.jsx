import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import {
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
} from './data/article.json';
import data from './data/stats.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title='Task 1 Blog Card' bottom />
        <BlogCard
          name={name}
          postedAt={postedAt}
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          avatar={avatar}
        />
        <Heading title='Task 2 Statistics' top bottom />
        <Statistics title='Main Statistics' stats={data} />

        <Heading title='Task 3 Forbes list' top bottom />
        <ForbesList />
        <Heading title='Task 4 Crypto history' top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
