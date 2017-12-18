<template>
  <div class="top">
    <div>{{$route.params.id}}</div>
  </div>
</template>

<script>
export default {
  name: 'top',
  methods:{
    show(){
      console.log("zoujie")
    },
  },
  watch:{
    '$route':'show'
  },
  beforeCreate:function(){
    this.$ajax.get('/module/req.json',{}).then((data)=>{console.log(data)}).catch((data)=>{console.log("失败了")})
  }
}
</script>

<style>
.top {
  margin: 20% auto;
  font-size: 26px;
}
</style>
