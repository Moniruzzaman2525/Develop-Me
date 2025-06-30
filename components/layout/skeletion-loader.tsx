const SkeletionLoader = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-yellow-200">
            <header className="flex items-center justify-between p-6">
                <div className="h-8 w-32 bg-gray-300 rounded animate-pulse" />
                <nav className="flex items-center space-x-8">
                    <div className="h-4 w-12 bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-14 bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-10 bg-gray-300 rounded animate-pulse" />
                    <div className="h-10 w-28 bg-gray-300 rounded-full animate-pulse" />
                </nav>
            </header>
            <main className="px-6 py-12">
                <div className="max-w-4xl">
                    <div className="space-y-4 mb-8">
                        <div className="h-16 w-full max-w-2xl bg-gray-300 rounded animate-pulse" />
                        <div className="h-16 w-full max-w-xl bg-gray-300 rounded animate-pulse" />
                    </div>

                    <div className="space-y-3 mb-8 max-w-md">
                        <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
                        <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
                    </div>

                    <div className="h-12 w-40 bg-gray-300 rounded-full animate-pulse" />
                </div>
                <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-4">
                    <div className="h-6 w-6 bg-gray-300 rounded animate-pulse" />
                    <div className="h-6 w-6 bg-gray-300 rounded animate-pulse" />
                    <div className="h-6 w-6 bg-gray-300 rounded animate-pulse" />
                </div>
            </main>

            <section className="bg-black text-white p-8 mt-16 rounded-t-3xl">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="h-6 w-32 bg-gray-700 rounded animate-pulse" />
                        <div className="flex space-x-4">
                            <div className="h-10 w-10 bg-gray-700 rounded-full animate-pulse" />
                            <div className="h-10 w-10 bg-gray-700 rounded-full animate-pulse" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="h-12 w-full max-w-sm bg-gray-700 rounded animate-pulse" />
                                <div className="h-12 w-full max-w-xs bg-gray-700 rounded animate-pulse" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
                            <div className="h-12 w-12 bg-gray-600 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-600 rounded animate-pulse" />
                            <div className="h-3 w-3/4 bg-gray-600 rounded animate-pulse" />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
                            <div className="h-12 w-12 bg-gray-600 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-600 rounded animate-pulse" />
                            <div className="h-3 w-3/4 bg-gray-600 rounded animate-pulse" />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
                            <div className="h-12 w-12 bg-gray-600 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-600 rounded animate-pulse" />
                            <div className="h-3 w-3/4 bg-gray-600 rounded animate-pulse" />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
                            <div className="h-12 w-12 bg-gray-600 rounded animate-pulse" />
                            <div className="h-4 w-full bg-gray-600 rounded animate-pulse" />
                            <div className="h-3 w-3/4 bg-gray-600 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
 export default SkeletionLoader
