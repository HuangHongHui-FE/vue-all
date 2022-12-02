<template>
  <div class="container">
    <input type="file" id="fileInput" @change="chooseFile" />
    <a-Button id="uploadBtn" @click="uploadFile">上传</a-Button>
  </div>
</template>

<script>
export default {
  name: "BigFileBasic",
  components: {},
  data() {
    this.pageData = {
      file: "",
    };
    return {};
  },

  methods: {
    chooseFile(e) {
      this.pageData.file = e.target.files[0];
      // console.log(this.pageData.file);
    },
    async uploadFile() {
      // console.log(this.$message);
      if (!this.pageData.file) {
        this.$message.warning("先选择要上传的文件！");
      }
      // 创建切片
      // let size = 1024 * 1024 * 10 //10MB 切片大小
      const size = 1024 * 50;
      const fileChunks = [];
      // 切片序号
      let index = 0;
      const file = this.pageData.file;
      for (let cur = 0; cur < file.size; cur += size) {
        // console.log(file.slice(cur))
        fileChunks.push({
          hash: index++,
          chunk: file.slice(cur, cur + size),
        });
      }
      console.log(fileChunks);
      // 上传切片
      const uploadList = fileChunks.map((item, index) => {
        const formData = new FormData();
        formData.append("filename", file.name);
        formData.append("hash", item.hash);
        formData.append("chunk", item.chunk);
        return axios({
          method: "post",
          url: "/upload",
          data: formData,
        });
      });
      await Promise.all(uploadList);
      // 合并切片
      const res = await axios({
        method: "get",
        url: "/merge",
        params: {
          filename: file.name,
        },
      });
      console.log("上传完成");
      console.log(res.data);
    },
  },
};
</script>



<style scoped land="less">
.container {
}
</style>



