<template>
  <div class="container">
    <no-ssr>
      <Upload multiple type="drag" :on-preview='handelPreView' action="http://121.196.152.242/excels/upload">
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>Click or drag files here to upload</p>
        </div>
      </Upload>
    </no-ssr >

  </div>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        handleDownload() {
            
        },
        handelPreView(file) {
            const url = 'http://121.196.152.242/excels/download/'+ file.name
            axios.get(url, {name: file.name}).then((res)=>{
                window.open(url)
            })
            // axios.get('http://localhost:9090/3547.xlsx')
        }
    }
};
</script>
<style lang="stylus" scoped></style>