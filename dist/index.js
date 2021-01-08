import BatchPopup from './components/BatchPopup.vue'

const globalPlugins ={
	install(vue){
		vue.component('BatchPopup',BatchPopup)
	}
}

export default globalPlugins;