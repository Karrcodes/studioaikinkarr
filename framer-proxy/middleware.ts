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

        return new NextResponse(response.body, {
            status: response.status,
            headers: response.headers,
        })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch from Framer' }, { status: 500 })
    }
}

export const config = {
    matcher: '/:path*',
}
