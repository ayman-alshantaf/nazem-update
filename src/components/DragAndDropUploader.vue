<template>
  <div class="upload-drag">
    <div  v-if="!file">

      <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true"
           @dragleave="dragging = false">
        <div class="dropZone-info" @drag="onChange">
          <span class="fa fa-cloud-upload dropZone-title dropZone-icon"></span>
          <span class="dropZone-title ">قم بالسحب والإفلات أو التصفح للتحميل</span>
        </div>
        <input type="file" @change="onChange">
      </div>
    </div>
    <div v-else class="dropZone-uploaded">
      <div class="dropZone-uploaded-info">
        <span class="dropZone-title">تم ارفاق الملف بنجاح</span>
        <button type="button" class="btn btn-primary removeFile" @click="removeFile">حذف الملف</button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "DragAndDropUploader",
  data() {
    return {
      file: '',
      dragging: false
    }
  },
  methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match('text.*')) {
        alert('please select txt file');
        this.dragging = false;
        return;
      }

      if (file.size > 5000000) {
        alert('please check file size no over 5 MB.')
        this.dragging = false;
        return;
      }
      this.file = file;
      console.log(this.file);
      this.dragging = false;
    },
    removeFile() {
      this.file = '';
    }
  },
  computed: {
    extension() {
      return (this.file) ? this.file.name.split('.').pop() : '';
    }
  }

}
</script>

<style lang="scss" scoped>
.upload-drag {
  .dropZone {
    width: 100%;
    height: 110px;
    position: relative;
    border: 2px dashed #CDCFD3;
    transition: all .3s ease-in-out;
  }

  .dropZone:hover {
    border: 2px dashed  #00C8AE;
  }

  .dropZone:hover .dropZone-title {
    color: #00C8AE;
  }

  .dropZone-info {
    color: #A8A8A8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
  }

  .dropZone-title {
    transition: all .3s ease-in-out;
    color: #787878;
    font-size: 18px;
  }

  .dropZone-icon{
    display: inline-block;
    margin-left: 10px;
    font-size: 20px;
    color: #00B5AD;
  }
  .dropZone input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .dropZone-upload-limit-info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .dropZone-over {
    background: #5C5C5C;
    opacity: 0.8;
  }

  .dropZone-uploaded {
    width: 100%;
    height: 110px;
    position: relative;
    border: 2px dashed #CDCFD3;
    transition: all .3s ease-in-out;
  }

  .dropZone-uploaded-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #A8A8A8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
  }

  .removeFile {
    width: 200px;
    margin-top: 10px;
    color: #00C8AE;
    font-size: 15px;
    text-decoration: underline;
  }
}

</style>
