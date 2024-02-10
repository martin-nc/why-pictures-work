
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Tag from '@/components/tag'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, Key } from 'react'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import Post from '../page'

function slugify(title: 'string') {
  return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function filterArticles(articles: { meta: { [key: string]: any }; slug: string }[]){
// let test =  articles.map(article => article.meta.tags.map((tag: any) => article.slug).includes(article.meta.tags))
articles.map(article => article.meta.tags.map((tag: any) => article.slug))

}

export default function TagPage() {
  
  // 1) Set blogs directory
  const articleDir = "articles"

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(articleDir))

  // 3) For each blog found
  const articles = (files.map( filename => {

  // 4) Read the content of that blog
  const fileContent = fs.readFileSync(path.join(articleDir, filename), 'utf-8')

  // 5) Extract the metadata from the blog's content
  const { data: frontMatter } = matter(fileContent)

 
  // 6) Return the metadata and page slug
  return {
    meta: frontMatter,
    slug: filename.replace('.mdx', '')
  }
    // Read all the articles in
    // Get the slug
    // Get the frontmatter keywords
    // If slug is in frontmatter keywords, return

}))


//fetchData({ params: { slug: "photography" } })
const filteredArticles = articles.filter((article) => article.meta.tags && article.meta.tags.map((t: 'string') => path).includes(article.meta.tags))
// console.log(articles.map(article => (article.meta.tags)))
//filterArticles(articles)
  return (
    <main>
      <section className='pb-10 mt-8'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map(article => ( 
            <div className="text-center border border-zinc-300" key={article.slug}>
              <div>
              <Link href={'/articles/' + article.slug} passHref key={article.slug}>
                <img src={`${article.meta.coverImage}`} 
                  alt={`${article.meta.title}`} 
                  title={`${article.meta.title}`}
                  className="mb-0 object-cover h-full w-full mt-0"
                />
              </Link>
              </div>
              <div className="px-3">
              <Link href={'/articles/' + article.slug} passHref key={article.slug}>
                <h2 className="text-lg mt-2 mb-0 font-semibold">{article.meta.title}</h2>
              </Link>
              <p className="mt-1 text-sm">{article.meta.description}</p> 
               {/* <div className="flex flex-wrap">
                  {article.meta.tags?.map((tag: string) => <Tag key={tag} text={tag} />)}
               </div> */}
              </div>

            </div>
          ))}
          </div>
      </section>
    </main>
  )
}