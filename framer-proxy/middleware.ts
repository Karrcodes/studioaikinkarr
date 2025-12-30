import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

    // Fetch from Framer site
    const framerUrl = `https://studioaikinkarr.framer.website${url.pathname}${url.search}`

    // Filter headers to avoid issues with host/connection
    const headers = new Headers()
    request.headers.forEach((value, key) => {
        if (!['host', 'connection', 'content-length', 'transfer-encoding', 'keep-alive'].includes(key.toLowerCase())) {
            headers.set(key, value)
        }
    })
    headers.set('Host', 'studioaikinkarr.framer.website')

    try {
        const response = await fetch(framerUrl, {
            headers: headers,
            method: request.method,
            // Only forward body for non-GET/HEAD methods
            body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
        })

        const newHeaders = new Headers(response.headers)
        newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=60')
        // Remove problematic response headers
        newHeaders.delete('content-encoding')
        newHeaders.delete('transfer-encoding')

        return new NextResponse(response.body, {
            status: response.status,
            headers: newHeaders,
        })
    } catch (error) {
        console.error('Proxy Error:', error)
        return NextResponse.json({ error: 'Failed to fetch from Framer' }, { status: 500 })
    }
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
