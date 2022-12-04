<template>
  <div class="container">
    <input type="file" id="fileInput" @change="chooseFile" />
    <a-Button id="uploadBtn" @click="uploadFile">上传</a-Button>
  </div>
</template>

<script>
import { bigFileUpload, bigFileMerge } from "../../../../api/index";
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
        return this.$message.warning("先选择要上传的文件！");
      }
      // 创建切片
      // let size = 1024 * 1024 * 10 //10MB 切片大小
      const size = 1024 * 50;
      const fileChunks = [];
      // 切片序号
      let index = 0;
      const file = this.pageData.file;
      for (let cur = 0; cur < file.size; cur += size) {
        fileChunks.push({
          hash: index++,
          chunk: file.slice(cur, cur + size),
        });
      }
      // console.log(fileChunks);
      // 上传切片
      const uploadList = fileChunks.map((item, index) => {
        const formData = new FormData();
        formData.append("filename", file.name);
        formData.append("hash", item.hash);
        formData.append("chunk", item.chunk);
        return bigFileUpload(formData);
      });
      const uploadRes = await Promise.all(uploadList);
      console.log(uploadRes);
      // 合并切片
      const res = await bigFileMerge(file.name);
      console.log(res.data);
    },
  },
};
</script>



<style scoped land="less">
.container {
}
</style>



