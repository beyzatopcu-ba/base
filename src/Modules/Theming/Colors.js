const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#30D086', // green
    mainColor2: '#FF7E39', // orange
    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#BCBCBC',
    },
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

const auth = {
    background: 'auth/background',
    inputBorder: 'auth/inputBorder',
    inputBackground: 'auth/inputBackground',
    inputText: 'auth/inputText',
    inputPlaceholder: 'auth/inputPlaceholder',
    coloredButtonBackground: 'auth/coloredButtonBackground',
    coloredButtonText: 'auth/coloredButtonText',
    paleButtonBackground: 'auth/paleButtonBackground',
    paleButtonText: 'auth/paleButtonText',
    appNameText: 'auth/appNameText',
}

const header = {
    background: 'header/background',
    text: 'header/text',
    backIcon: 'header/backIcon',
    rightIcon: 'header/rightIcon',
}

// cn: color names
export const cn = {
    auth,
    header,
}

export const darkColors = {
    // auth
    [auth.background]: constantColors.mainColor1,
    [auth.inputBorder]: constantColors.greys[1],
    [auth.inputBackground]: toRGBA(constantColors.greys[1], 10),
    [auth.inputText]: constantColors.greys[1],
    [auth.inputPlaceholder]: toRGBA(constantColors.greys[1], 40),
    [auth.coloredButtonBackground]: constantColors.greys[1],
    [auth.coloredButtonText]: constantColors.white,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.greys[1],
    [auth.appNameText]: constantColors.greys[1],
    // header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.greys[1],
    [header.backIcon]: constantColors.greys[1],
    [header.rightIcon]: constantColors.greys[1],
};

export const lightColors = {
    // auth
    [auth.background]: constantColors.mainColor1,
    [auth.inputBorder]: constantColors.white,
    [auth.inputBackground]: toRGBA(constantColors.white, 20),
    [auth.inputText]: constantColors.white,
    [auth.inputPlaceholder]: toRGBA(constantColors.white, 60),
    [auth.coloredButtonBackground]: constantColors.white,
    [auth.coloredButtonText]: constantColors.mainColor2,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.paleButtonText]: constantColors.white,
    [auth.appNameText]: constantColors.white,
    // header
    [header.background]: constantColors.mainColor1,
    [header.text]: constantColors.white,
    [header.backIcon]: constantColors.white,
    [header.rightIcon]: constantColors.white,
}
