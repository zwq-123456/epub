export const FONT_SIZE_LIST = [
    { fontSize: 12 },
    { fontSize: 14 },
    { fontSize: 16 },
    { fontSize: 18 },
    { fontSize: 20 },
    { fontSize: 22 },
    { fontSize: 24 },
]
export const FONT_FAMILY = [
    { font: 'Default' },
    { font: 'Cabin' },
    { font: 'Days One' },
    { font: 'Montserrat' },
    { font: 'Tangerine' }
]
export const themesList = [
    {
        alias: vue.$t('book.themeDefault'),
        name: "default",
        style: {
            body: {
                color: "#000",
                background: "#fff",
            },
        },
    },
    {
        alias: vue.$t('book.themeEye'),
        name: "eye",
        style: {
            body: {
                color: "#000",
                background: "#ceeaba",
            },
        },
    },
    {
        alias: vue.$t('book.themeNight'),
        name: "night",
        style: {
            body: {
                color: "#fff",
                background: "#000",
            },
        },
    },
    {
        alias: vue.$t('book.themeGold'),
        name: "gold",
        style: {
            body: {
                color: "#000",
                background: "rgb(241,236,226)",
            },
        },
    },
]