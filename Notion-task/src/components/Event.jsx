import React from 'react';

const posts = [
    {
        id: 1,
        title: 'ByteCraft 2026 (Hackathon)',
        href: '#events',
        description:
            'A non-stop, high-energy hackathon designed to challenge developers, designers, and innovators to collaborate and build tech solutions for real-world problems.',
        imageUrl:'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/650209f47a6c7_bytecraft.jpg'
            ,
        date: 'Aug 1, 2026 ',
        datetime: 'Campus Main Auditorium & Discord (Hybrid)',
        category: { title: 'Development / Hackathon', href: '#' },
        author: {
            name: 'Arjun Mehta',
            role: 'Senior SDE at Google',
            href: '#leadership',
            imageUrl:
                'https://img.icons8.com/?size=100&id=23242&format=png&color=000000',
        },
    },
    {
        id: 2,
        title: 'LogicLeap: Algorithmic Coding Challenge',
        href: '#events',
        description:
            'A high-speed competitive coding battleground designed to test your data structures, algorithmic efficiency, and rapid problem-solving skills under pressure.',
        imageUrl:
            'https://online.champlain.edu/sites/online/files/styles/width_1900/public/2024-04/blog-header_%20coding-bootcamp-vs-degree_1900x900.jpg?itok=UaiZAOB_',
        date: 'Aug 10, 2026',
        datetime: 'AB2-429, Tech Block (Offline)',
        category: { title: 'Competitve Programming', href: '#' },
        author: {
            name: 'Rohan Das',
            role: '(ACM-ICPC Regionalist & Tech Lead)',
            href: '#leadership',
            imageUrl:
                'https://img.icons8.com/?size=100&id=NcQNyxjmHvuB&format=png&color=000000',
        },
    },
    {
        id: 3,
        title: 'Neural Networks: Zero to Hero Bootcamp',
        href: '#events',
        description:
            'A comprehensive hands-on workshop guiding you from the absolute basics of data preprocessing to training and deploying your very first predictive neural network model.',
        imageUrl:
            'https://www.computerworld.com/wp-content/uploads/2024/03/programming_coding_elements_lines_of_code_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056840_2400x1600-100795791-orig-100918079-orig.jpg?resize=1536%2C1024&quality=50&strip=all',
        date: 'Aug 12, 2026',
        datetime: 'Zoom Meetings & GitHub Codespaces (Online)',
        category: { title: 'Artificial Intelligence / ML', href: '#' },
        author: {
            name: 'Dr. Hariharan',
            role: 'AI Researcher & Data Scientist',
            href: '#leadership',
            imageUrl:
                'https://img.icons8.com/?size=100&id=20749&format=png&color=000000',
        },
    },
];

export default function BlogSection({onRegisterClick}) {
    return (
        <div id="events" className="bg-zinc-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header section */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-blk text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        OUR EVENTS
                    </h2>
                    <p className="mt-2 text-lg text-gray-400">
                        From concepts to creation: Explore our latest events.Shape the Future, One Event at a Time.
                    </p>
                </div>

                {/* Grid layout */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">

                            {/* Card Image */}
                            <div className="relative w-full">
                                <img
                                    alt={post.title}
                                    src={post.imageUrl}
                                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>

                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-400">
                                        {post.date}
                                    </time>
                                    <p
                                        className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700"
                                    >
                                        {post.category.title}
                                    </p>
                                </div>

                                <div className="group relative">
                                    <p className='text-gray-400'>{post.datetime}</p>
                                    <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-gray-300">
                                        <a onClick={onRegisterClick} href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm text-gray-400 leading-6">
                                        {post.description}
                                    </p>
                                </div>

                                <h3 className='text-white font-bold'>Mentor</h3>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt={post.author.name} src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-white">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-400">{post.author.role}</p>
                                    </div>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center mt-20'>
                <button
                    type="button"
                    onClick={onRegisterClick}
                    className="rounded-full bg-white px-5 py-3 text-base font-semibold text-black shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register Now!
                </button>
            </div>
        </div>
    );
}