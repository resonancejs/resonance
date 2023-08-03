export type MIME =
    | 'application/atom+xml'
    | 'application/epub+zip'
    | 'application/gzip'
    | 'application/java-archive'
    | 'application/json'
    | 'application/ld+json'
    | 'application/msword'
    | 'application/octet-stream'
    | 'application/ogg'
    | 'application/pdf'
    | 'application/rtf'
    | 'application/vnd.amazon.ebook'
    | 'application/vnd.apple.installer+xml'
    | 'application/vnd.mozilla.xul+xml'
    | 'application/vnd.ms-excel'
    | 'application/vnd.ms-fontobject'
    | 'application/vnd.ms-powerpoint'
    | 'application/vnd.oasis.opendocument.presentation'
    | 'application/vnd.oasis.opendocument.spreadsheet'
    | 'application/vnd.oasis.opendocument.text'
    | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    | 'application/vnd.rar'
    | 'application/vnd.visio'
    | 'application/x-7z-compressed'
    | 'application/x-abiword'
    | 'application/x-bzip'
    | 'application/x-bzip2'
    | 'application/x-cdf'
    | 'application/x-csh'
    | 'application/x-freearc'
    | 'application/x-httpd-php'
    | 'application/x-sh'
    | 'application/x-tar'
    | 'application/xhtml+xml'
    | 'application/xml'
    | 'application/zip'
    | 'audio/3gpp'
    | 'audio/3gpp2'
    | 'audio/aac'
    | 'audio/midi'
    | 'audio/mpeg'
    | 'audio/ogg'
    | 'audio/opus'
    | 'audio/wav'
    | 'audio/webm'
    | 'audio/x-midi'
    | 'font/otf'
    | 'font/ttf'
    | 'font/woff'
    | 'font/woff2'
    | 'image/avif'
    | 'image/bmp'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/png'
    | 'image/svg+xml'
    | 'image/tiff'
    | 'image/vnd.microsoft.icon'
    | 'image/webp'
    | 'text/calendar'
    | 'text/css'
    | 'text/csv'
    | 'text/html'
    | 'text/javascript'
    | 'text/javascript'
    | 'text/plain'
    | 'text/xml'
    | 'video/3gpp'
    | 'video/3gpp2'
    | 'video/mp2t'
    | 'video/mp4'
    | 'video/mpeg'
    | 'video/ogg'
    | 'video/webm'
    | 'video/x-msvideo';

export function isMIME(mime: any): mime is MIME {
    return mimeTypes.includes(mime);
}

export const mimeTypes = [
    'application/atom+xml',
    'application/epub+zip',
    'application/gzip',
    'application/java-archive',
    'application/json',
    'application/ld+json',
    'application/msword',
    'application/octet-stream',
    'application/ogg',
    'application/pdf',
    'application/rtf',
    'application/vnd.amazon.ebook',
    'application/vnd.apple.installer+xml',
    'application/vnd.mozilla.xul+xml',
    'application/vnd.ms-excel',
    'application/vnd.ms-fontobject',
    'application/vnd.ms-powerpoint',
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.rar',
    'application/vnd.visio',
    'application/x-7z-compressed',
    'application/x-abiword',
    'application/x-bzip',
    'application/x-bzip2',
    'application/x-cdf',
    'application/x-csh',
    'application/x-freearc',
    'application/x-httpd-php',
    'application/x-sh',
    'application/x-tar',
    'application/xhtml+xml',
    'application/xml',
    'application/zip',
    'audio/3gpp',
    'audio/3gpp2',
    'audio/aac',
    'audio/midi',
    'audio/mpeg',
    'audio/ogg',
    'audio/opus',
    'audio/wav',
    'audio/webm',
    'audio/x-midi',
    'font/otf',
    'font/ttf',
    'font/woff',
    'font/woff2',
    'image/avif',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/vnd.microsoft.icon',
    'image/webp',
    'text/calendar',
    'text/css',
    'text/csv',
    'text/html',
    'text/javascript',
    'text/javascript',
    'text/plain',
    'text/xml',
    'video/3gpp',
    'video/3gpp2',
    'video/mp2t',
    'video/mp4',
    'video/mpeg',
    'video/ogg',
    'video/webm',
    'video/x-msvideo',
];
