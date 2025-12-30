import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

    // Fetch from Framer site
    const framerUrl = `https://studioaikinkarr.framer.website${url.pathname}${url.search}`

    try {
        const response = await fetch(framerUrl, {
            headers: {
                ...Object.fromEntries(request.headers),
                host: 'studioaikinkarr.framer.website',
            },
        })

        const newHeaders = new Headers(response.headers)
        newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=60')

        return new NextResponse(response.body, {
            status: response.status,
            headers: newHeaders,
        })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch from Framer' }, { status: 500 })
    }
}

export const config = {
    matcher: '/:path*',
}
