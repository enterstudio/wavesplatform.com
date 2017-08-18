export const primary = {
    0: 'white',
    300: '#6579a7',
    500: '##699eff',
    700: '#263f6f',
    900: '#0a1b43',
}

export const secondary = {
    500: '#ea9019'
}

export const success = {
    500: '#22d64c'
}

export const danger = {
    500: '#cc1442'
}

export const gray = {
    0: '#fff',
    50: '#f9f9f9',
    300: '#bbb',
    500: '#999',
    900: '#333',
}




const palette = {
    primary,
    secondary,
    success,
    danger,
    gray,
    getColor: color => palette[color.split('-')[0]][color.split('-')[1]]
}

export { palette }
export default palette