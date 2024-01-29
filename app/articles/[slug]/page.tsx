import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Button from '@/components/button'
import remarkGfm from 'remark-gfm'

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('articles'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({slug}:{slug : string}){
    const markdownFile = fs.readFileSync(path.join('articles',slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({ params } :any) {
    const props = getPost(params);

    return (
        <article className='mx-auto'>
            <h1 className="text-center">{props.frontMatter.title}</h1>
            
           <MDXRemote source={props.content} components={{Button}} options={options}/>
        </article>
    )
}

export async function generateMetadata({ params } : any) {
    const article = getPost(params);

    return{
        title: article.frontMatter.title,
        description: article.frontMatter.description,
    }
}

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    }
}