<template>
  <div class="container">
    <input type="file" id="fileInput" @change="chooseFile" />
    <a-Button @click="uploadFile">上传</a-Button>
    <a-Button @click="uploadErrFile">断点续传</a-Button>
    <!-- 显示所有切片的图 -->
    <div class="chunks">
      <div :class="item" v-for="(item, index) in chunks" :key="index"></div>
    </div>
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
      // 切片结果
      fileChunks: [],
      formData: "",
      // 上传失败的块
      errUploadRes: []
    };
    return {
      chunks: [],
    };
  },

  methods: {
    chooseFile(e) {
      this.pageData.file = e.target.files[0];
      this.qiePian();
    },

    // 切片
    qiePian() {
      // 切片大小
      const size = 1024 * 50;
      const fileChunks = [];
      // 切片序号
      let index = 0;
      for (let cur = 0; cur < this.pageData.file.size; cur += size) {
        fileChunks.push({
          hash: index++,
          chunk: this.pageData.file.slice(cur, cur + size),
        });

        this.chunks.push("kongChunk");
      }

      this.pageData.fileChunks = fileChunks;
      //   console.log("list---", fileChunks);
    },

    // 上传切片
    async uploadFile() {
      if (!this.pageData.file) {
        this.$message.warn("请先选择文件");
      }
      const uploadRes = await this.reqLimit(this.pageData.fileChunks, 4);
      console.log("uploadRes---", uploadRes);
      if (uploadRes) {
        this.$message.success("文件上传完成，等待merge");
      }
      // 合并切片
      const mergeRes = await bigFileMerge(this.pageData.file.name);
      console.log(mergeRes);
      if (mergeRes.status === 200) {
        return this.$message.success("文件merge完成");
      }
    },

    // 断点续传
    uploadErrFile() {},

    // 切片生成formData, 这里可以优化，只有一个formData实例
    chunkToForm(file, chunk) {
      if (!this.pageData.formData) {
        this.pageData.formData = new FormData();
      }
      this.pageData.formData.set("filename", file.name);
      this.pageData.formData.set("hash", chunk.hash);
      this.pageData.formData.set("chunk", chunk.chunk);
    },

    // 异步控制并发数
    reqLimit(tasks = [], limit = 4) {
      const that = this;
      return new Promise((resolve, reject) => {
        const len = tasks.length;
        const result = [];
        let count = 0;
        while (limit > 0) {
          start();
          limit = limit - 1;
        }

        function start() {
          const task = tasks.shift();

          if (task) {
            that.chunkToForm(that.pageData.file, task);
            bigFileUpload(that.pageData.formData)
              .then((res) => {
                // 控制方格样式
                that.chunks.splice(count, 1, "successChunk");
                result.push(res);
              })
              .catch((err) => {
                that.chunks.splice(count, 1, "errChunk");
                result.push(err);
                that.pageData.errUploadRes.push(tasks[count]);
                console.log(that.pageData.errUploadRes);
              })
              .finally(() => {
                if (count === len - 1) {
                  // 最后一个任务完成
                  resolve(result);
                } else {
                  // 完成之后，启动下一个任务
                  count++;
                  start();
                }
              });
          }
        }
      });
    },
  },
};
</script>



<style scoped lang="less">
.container {
  .chunks {
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    .kongChunk {
      width: 10px;
      height: 10px;
      border: 1px solid rgb(167, 166, 166);
    }
    .successChunk {
      .kongChunk;
      background-color: aquamarine;
    }
    .errChunk {
      .kongChunk;
      background-color: red;
    }
  }
}
</style>



