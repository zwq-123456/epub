const book = {
    state: {
        fileName: '',
        menuVisible: false,//菜单栏
        settingVisible: -1,//-1不显示 0字号 1主题 2进度条 3目录
        defaultPoint: 16,//设置默认字体
        currentBook: null,//利用vuex实现this.book共享
        defaultFontFamily: 'Default',
        fontFamilyVisible: false,
        defaultTheme: 'Default',
        bookAvailable: false,
        progress: 0,
        section: 0,
        isPaginating: true,
        currentBook: null,
        navigation: null,
        cover: null,
        metadata: null,
        paginate: '',
        pagelist: null,
        offsetY: 0,
        isBookmark: null
    },
    mutations: {
        set_File_Name(state, fileName) {
            state.fileName = fileName
        },
        set_MENUVISIBLE(state, menuVisible) {
            state.menuVisible = menuVisible
        },
        set_SETTINGVSIBLE(state, settingVisible) {
            state.settingVisible = settingVisible
        },
        set_DEFAULTPOINT(state, defaultPoint) {
            state.defaultPoint = defaultPoint
        },
        set_CURRENTBOOK(state, currentBook) {
            state.currentBook = currentBook
        },
        'SET_DEFAULT_FONT_FAMILY': (state, font) => {
            state.defaultFontFamily = font
        },
        'SET_FONT_FAMILY_VISIBLE': (state, visible) => {
            state.fontFamilyVisible = visible
        },
        'SET_DEFAULT_THEME': (state, theme) => {
            state.defaultTheme = theme
        },
        'SET_BOOK_AVAILABLE': (state, bookAvailable) => {
            state.bookAvailable = bookAvailable
        },
        'SET_PROGRESS': (state, progress) => {
            state.progress = progress
        },
        'SET_SECTION': (state, section) => {
            state.section = section
        },
        'SET_IS_PAGINATING': (state, isPaginating) => {
            state.isPaginating = isPaginating
        },
        'SET_CURRENT_BOOK': (state, currentBook) => {
            state.currentBook = currentBook
        },
        'SET_NAVIGATION': (state, navigation) => {
            state.navigation = navigation
        },
        'SET_COVER': (state, cover) => {
            state.cover = cover
        },
        'SET_METADATA': (state, metadata) => {
            state.metadata = metadata
        },
        'SET_PAGINATE': (state, paginate) => {
            state.paginate = paginate
        },
        'SET_PAGELIST': (state, pagelist) => {
            state.pagelist = pagelist
        },
        'SET_OFFSETY': (state, offsetY) => {
            state.offsetY = offsetY
        },
        'SET_IS_BOOKMARK': (state, isBookmark) => {
            state.isBookmark = isBookmark
        }

    },

}
export default book