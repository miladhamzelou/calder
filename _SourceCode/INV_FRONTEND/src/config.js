export const API_ROOT = (process.env.NODE_ENV === 'production')
		? 'http://120.26.201.213:8889/inv/'
		:'http://120.26.201.213:8889/inv/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
		? 'http://www.youjiacn.com'
		: ''