// import { corsHeaders } from '../../supabase/functions/cors';
import tinycolor from 'tinycolor2';
import { v4 as uuidv4 } from 'uuid';


export const getUserOS = () => {
  let operatingSystem = 'Not known'
  if (window.navigator.appVersion.indexOf('Win') !== -1) {
    operatingSystem = 'Windows OS'
  }
  if (window.navigator.appVersion.indexOf('Mac') !== -1) {
    operatingSystem = 'MacOS'
  }
  if (window.navigator.appVersion.indexOf('X11') !== -1) {
    operatingSystem = 'UNIX OS'
  }
  if (window.navigator.appVersion.indexOf('Linux') !== -1) {
    operatingSystem = 'Linux OS'
  }

  return operatingSystem
}
export const getUserBrowser = () => {
  let currentBrowser = 'Not known'
  if (window.navigator.userAgent.indexOf('Chrome') !== -1) {
    currentBrowser = 'Google Chrome'
  } else if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
    currentBrowser = 'Mozilla Firefox'
  } else if (window.navigator.userAgent.indexOf('MSIE') !== -1) {
    currentBrowser = 'Internet Exployer'
  } else if (window.navigator.userAgent.indexOf('Edge') !== -1) {
    currentBrowser = 'Edge'
  } else if (window.navigator.userAgent.indexOf('Safari') !== -1) {
    currentBrowser = 'Safari'
  } else if (window.navigator.userAgent.indexOf('Opera') !== -1) {
    currentBrowser = 'Opera'
  } else {
    // console.log('Others');
  }

  return currentBrowser
}
export const getUserBrowserVersion = () => (window.navigator as any).sayswho
export const getAuthentication = () => {
  const token: any = localStorage.getItem("tender")
  const userToken = JSON.parse(token)
  return userToken
}
export const getUUID = () => uuidv4()

export const timeFormat = (dateData: string) => {
  const date: Date = new Date(dateData)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
  const dateString: string = date.toLocaleString('en-US', options)
  return dateString
}
export const lightenColor = (color: string, percent: number) => {
  const tc = tinycolor(color)
  const lightenedColor = tc.lighten(percent).toString()
  if (!tinycolor(lightenedColor).isValid()) {
    return color
  }
  return lightenedColor
}

export const darkenColor = (color: string, percent: number) => {
  const tc = tinycolor(color)
  const darkenedColor = tc.darken(percent).toString()
  if (!tinycolor(darkenedColor).isValid()) {
    return color
  }
  return darkenedColor
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year.toString()}`
  return formattedDate
}

export function setAuthToken(token: string) {
  window.localStorage.setItem('tendertoken', token)
}
export function getAuthToken() {
  return window.localStorage.getItem('tendertoken')
}
export function logout() {
  return window.localStorage.removeItem('tendertoken')
}

export const openSidebar = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
};

export const closeSidebar = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
};

export const toggleSidebar = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};
