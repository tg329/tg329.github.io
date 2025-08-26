import Image from "next/image";
import Link from "next/link";

interface BoxProps {
    href: string;
    imageSrc: string;
    imageAlt?: string;
    title: string;
    tags?: string[];
    description: string;
    target?: string;
    rel?: string;
}

export default function Box({
    href,
    imageSrc,
    imageAlt = "",
    title,
    tags = [],
    description,
    target,
    rel,
}: BoxProps) {
    return (
        <Link
            href={href}
            className="block max-w-[480px] max-h-95 w-full rounded-lg transition-transform duration-200 ease-in-out overflow-hidden bg-white transform hover:scale-101 text-black break-words"
            {...(target ? { target } : {})}
            {...(rel ? { rel } : {})}
        >
            <div className="relative w-full h-55">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 500px) 100vw, 500px"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold mb-2">{title}</h3>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-black text-white text-sm px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <p className="text-sm">{description}</p>
            </div>
        </Link>
    );
}