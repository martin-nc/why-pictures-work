import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home() {
  
  // 1) Set blogs directory
  const articleDir = "articles"

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(articleDir))

  // 3) For each blog found
  const articles = files.map(filename => {

    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(articleDir, filename), 'utf-8')

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent)

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  return (
    <main>
      <section className='pb-10 mt-8'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map(article => ( 
            <div className="text-center border border-slate-300" key={article.slug}>
              <div className="h-60">
              <Link href={'/articles/' + article.slug} passHref key={article.slug}>
                <img src={`${article.meta.coverImage}`} 
                  alt={`${article.meta.title}`} 
                  title={`${article.meta.title}`}
                  className="mb-0 object-cover h-full w-full border mt-0"
                />
              </Link>
              </div>
              <div className="px-3">
              <Link href={'/articles/' + article.slug} passHref key={article.slug}>
                <h2 className="text-lg mt-2 mb-0 font-semibold">{article.meta.title}</h2>
              </Link>
              <p className="mt-1 leading-tight">{article.meta.description}</p>
              </div>
            </div>
          ))}
          </div>
      </section>
    </main>
  )
}