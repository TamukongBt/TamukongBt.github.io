"use client"
import React, { useState } from 'react';
import { BookOpen, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

type PostType = 'poem' | 'essay' | 'musing';

interface Post {
    id: number;
    title: string;
    date: string;
    type: PostType;
    content: string;
}

const posts: Post[] = [
    {
        id: 1,
        title: "Saltwater",
        date: "February 2026",
        type: "poem",
        content: `Some words dissolve before reaching the tongue,
held too long in the warmth of the chest —
they become salt water instead,
pressing softly behind the eyes.

I have learned to let them fall.
Not every thought was meant to be spoken.
Some were only ever meant to be felt.`,
    },
    {
        id: 2,
        title: "Between Rains",
        date: "January 2026",
        type: "poem",
        content: `The city exhales after a downpour,
streetlights caught in shallow rivers
along the gutters of every ordinary road.

I walk through the in-between hours —
that narrow corridor where yesterday
has not quite become tomorrow,
where even silence has a texture.

These are the moments I collect:
not the thunder, not the flood,
but whatever lives between rains.`,
    },
    {
        id: 3,
        title: "On Leaving",
        date: "December 2025",
        type: "musing",
        content: `There is a particular kind of departure
that asks nothing of you —
no fanfare, no ceremony.
You simply step through a door
and the shape of your absence
is left behind like an outline in chalk
that rain will settle into slowly.

I keep thinking about the things we carry
versus the things we think we carry.
They are rarely the same list.`,
    },
    {
        id: 4,
        title: "Grammar",
        date: "November 2025",
        type: "poem",
        content: `I am still learning the grammar of rest —
which pauses are commas and which are full stops.
Whether the space after good news
needs punctuation at all.

My sentences run long.
I was taught to keep speaking
until the thought was finished,
but sometimes the thought
never quite finishes.

Sometimes it just
becomes what comes next.`,
    },
    {
        id: 5,
        title: "The Future of Web Development",
        date: "2025",
        type: "essay",
        content: `As web technologies continue to evolve, new paradigms in rendering and edge computing are shifting how we build for scale. The line between client and server is blurring, enabling a generation of hyper-fast, dynamic applications that feel instant to the user. From Server Components to WebAssembly, the next frontier promises unparalleled performance without sacrificing developer experience or rich interactivity.`,
    },
    {
        id: 6,
        title: "Designing Intuitive Interfaces",
        date: "2025",
        type: "essay",
        content: `Great design isn't just about aesthetics; it's about reducing cognitive load. A truly intuitive interface anticipates the user's needs, guiding them through complex workflows with familiar patterns and clear visual hierarchy. By prioritizing accessibility and thoughtful micro-interactions, we can create digital experiences that don't just solve problems, but feel entirely effortless to use from the first click.`,
    },
];

const typeStyles: Record<PostType, string> = {
    poem: 'border-bittersweet text-bittersweet',
    essay: 'border-taupe text-taupe',
    musing: 'border-lemonchiffon text-lemonchiffon',
};

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<Post>(posts[0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="h-[calc(100dvh-3.5rem)] md:h-[98vh] flex flex-col bg-eerieblack w-full !text-whiteout">

            <div className="flex flex-1 min-h-0 border border-brownsugar">

                {/* Sidebar */}
                <div className={`hidden lg:flex flex-col bg-eerieblack border-r border-brownsugar shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
                    <div className="p-4 border-b border-brownsugar">
                        <h2 className="text-xs font-console uppercase tracking-widest text-taupe">Words</h2>
                    </div>
                    <nav className="overflow-y-auto flex-1 hide-scrollbar">
                        {posts.map((post) => (
                            <button
                                key={post.id}
                                onClick={() => setSelectedPost(post)}
                                className={`w-full text-left px-4 py-3 transition-colors duration-200 border-l-2 ${
                                    selectedPost.id === post.id
                                        ? 'border-bittersweet text-lemonchiffon bg-bistre'
                                        : 'border-transparent text-taupe hover:text-lemonchiffon hover:bg-bistre/60'
                                }`}
                            >
                                <p className="text-[0.65rem] font-console uppercase tracking-widest text-taupe mb-0.5">{post.type}</p>
                                <p className="text-sm font-body leading-tight">{post.title}</p>
                                <p className="text-[0.62rem] text-taupe mt-0.5">{post.date}</p>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="bg-eerieblack border-b border-brownsugar px-4 py-4 md:px-6 flex items-center gap-3">
                        <Button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            size="sm"
                            variant="outline"
                            className="hidden lg:flex p-1.5 h-auto border-brownsugar text-taupe hover:text-lemonchiffon"
                        >
                            <Menu size={16} />
                        </Button>
                        <div>
                            <p className="text-[0.6em] font-console tracking-widest uppercase text-taupe leading-none mb-1">Blog</p>
                            <h1 className="text-lg md:text-xl font-body text-lemonchiffon leading-tight">
                                {selectedPost.title}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-hidden flex flex-col bg-eerieblack">
                        <>
                                {/* Mobile: horizontal post scroller */}
                                <div className="lg:hidden flex overflow-x-auto p-3 gap-2 border-b border-brownsugar hide-scrollbar">
                                    {posts.map((post) => (
                                        <button
                                            key={post.id}
                                            onClick={() => setSelectedPost(post)}
                                            className={`flex-shrink-0 px-3 py-1.5 text-xs font-console rounded-sm border transition-colors ${
                                                selectedPost.id === post.id
                                                    ? 'border-bittersweet text-bittersweet bg-bistre'
                                                    : 'border-brownsugar text-taupe hover:border-bittersweet/50 hover:text-lemonchiffon'
                                            }`}
                                        >
                                            {post.title}
                                        </button>
                                    ))}
                                </div>

                                {/* Post body */}
                                <div className="flex-1 overflow-y-auto hide-scrollbar flex justify-center p-6 md:p-12 lg:p-16">
                                    <div className="w-full max-w-2xl">
                                        <span className={`inline-block px-2.5 py-1 mb-6 text-[0.65rem] font-console tracking-widest uppercase border rounded-sm ${typeStyles[selectedPost.type]}`}>
                                            {selectedPost.type}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-body text-lemonchiffon mb-2 leading-tight">
                                            {selectedPost.title}
                                        </h2>
                                        <p className="text-xs font-console text-taupe tracking-widest uppercase mb-10">
                                            {selectedPost.date}
                                        </p>
                                        <div className="border-l-2 border-brownsugar pl-6 md:pl-8">
                                            <p className="text-taupe font-body leading-loose text-base md:text-lg whitespace-pre-wrap">
                                                {selectedPost.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
