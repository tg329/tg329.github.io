import Image from "next/image";
import Link from "next/link";

interface BoxProps {
    href: string;
    imageSrc: string;
    imageAlt?: string;
    title: string;
    tags?: string[];
    description: string;
}

export default function Box({
    href,
    imageSrc,
    imageAlt = "",
    title,
    tags = [],
    description,
}: BoxProps) {
    return (
        <Link
            href={href}
            className="block rounded-lg border border-gray-200 hover:shadow-lg transition-transform duration-200 ease-in-out overflow-hidden bg-white transform hover:scale-101"
        >
            <div className="relative w-full h-48">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </Link>
    );
}