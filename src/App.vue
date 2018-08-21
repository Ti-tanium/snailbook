

<script>
import {get} from './utils/index'
export default{
  async created () {
    const res = await get('/weapp/test')
    console.log(res, 'hahahah')
    console.log('小程序启动了')
  }
}
</script>

<style>

</style>

		console.log('小程序启动了')
	}
}
</script>

<style>

</style>
