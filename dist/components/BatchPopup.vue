<template>
	<div class="batchBox" v-bind:class="{ batchBoxNoPosition: isPosition }" v-if="batchCount">
		<div class="con">
			<div class="leftText">
				已选择
				<span class="count">{{ batchCount }}</span>
				项
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class extends Vue {
	@Prop(Number) batchCount!: number;
	@Prop(Boolean) isPosition?: boolean;
	created() {}
	mounted() {}
	getData() {}
}
</script>

<style lang="scss">
.batchBox {
	width: calc(100% - 210px);
	background: #fff;
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 9999999999;
	box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03);
}
.batchBoxNoPosition {
	position: absolute;
	left: -20px;
	width: calc(100% + 40px);
	box-shadow: none;
	border: 1px solid #ebeef5;
	border-left: none;
	border-right: 0;
	//background:rgba(0,0,0,0.1) ;
	//margin-left:-20px;
}
.con {
	padding: 0 40px 0 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	.leftText {
		line-height: 44px;
	}
	.count {
		color: #1890ff;
		font-weight: 600;
		padding: 4px;
	}
}
</style>
