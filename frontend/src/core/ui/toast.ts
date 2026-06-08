import { t } from 'i18next'
import Toast from 'react-native-toast-message'

type ToastType = 'success' | 'error' | 'info'

const showToast = (type: ToastType, message: string, title: string) => {
	Toast.show({
		type,
		text1: title,
		text2: message,
	})
}

const toast = {
	success: (message: string, title = t('SUCCESS.TITLE')) => {
		showToast('success', message, title)
	},
	error: (message: string, title = t('ERROR.TITLE')) => {
		showToast('error', message, title)
	},
	warning: (message: string, title = t('WARNING')) => {
		showToast('info', message, title)
	},
	info: (message: string, title = t('INFORMATION')) => {
		showToast('info', message, title)
	},
}

export { toast }
