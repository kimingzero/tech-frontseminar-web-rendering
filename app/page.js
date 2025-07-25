import Link from "next/link";
import { Button } from "../components/ui/button";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Rendering
                    </h1>
                    <p className="text-gray-600">Compare CSR, SSR, SSG, ISR</p>
                </div>

                <div className="space-y-4">
                    <Link href="/csr" className="block">
                        <Button
                            variant="outline"
                            className="w-full h-16 text-lg font-medium bg-transparent"
                        >
                            CSR
                            <span className="block text-sm font-normal text-gray-500">
                                Client-Side Rendering
                            </span>
                        </Button>
                    </Link>

                    <Link href="/ssr" className="block">
                        <Button
                            variant="outline"
                            className="w-full h-16 text-lg font-medium bg-transparent"
                        >
                            SSR
                            <span className="block text-sm font-normal text-gray-500">
                                Server-Side Rendering
                            </span>
                        </Button>
                    </Link>

                    <Link href="/ssg" className="block">
                        <Button
                            variant="outline"
                            className="w-full h-16 text-lg font-medium bg-transparent"
                        >
                            SSG
                            <span className="block text-sm font-normal text-gray-500">
                                Static Site Generation
                            </span>
                        </Button>
                    </Link>

                    <Link href="/isr" className="block">
                        <Button
                            variant="outline"
                            className="w-full h-16 text-lg font-medium bg-transparent"
                        >
                            ISR
                            <span className="block text-sm font-normal text-gray-500">
                                Incremental Static Regeneration
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
