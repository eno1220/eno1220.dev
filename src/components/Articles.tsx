import { Grid, GridItem } from '@chakra-ui/react'

import ArticleCard from '@/components/ArticleCard'

const articles = [
  {
    title: '文化祭のIT化に取り組んだ話',
    publishedAt: '2023-06-24',
    href: 'https://zenn.dev/eno1220/articles/cfa73151086ad9',
  },
  {
    title: 'Discordに開いているwebページのURLを保存するChrome拡張機能を作った',
    publishedAt: '2023-01-30',
    href: 'https://zenn.dev/eno1220/articles/de30fdd83d891e',
  },
]

const Articles = () => {
  return (
    <Grid
      width='100%'
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      gap={{
        base: 4,
        md: 6,
      }}
      mt={2}
    >
      {articles.map((article, index) => (
        <GridItem key={`${article.title}-${index}`}>
          <ArticleCard
            title={article.title}
            publishedAt={article.publishedAt}
            href={article.href}
          />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Articles
