import { useMessage } from "naive-ui";
import { ref } from "vue";

export const useFileUpload = (formStateComp) => {
  const fileList = ref([]);
  const message = useMessage();

  const handleFileChange = ({ file, fileList: newFileList }) => {
    if (file.status === "removed") {
      fileList.value = [];
      formStateComp.value.img = null;
    }

    if (file.file) {
      const img = new Image();

      img.onload = () => {
        const { width, height } = img;

        if (width !== height) {
          message.error("Картинка должна быть квадратной (1:1)");
          fileList.value = [];
          formStateComp.value.img = null;
        } else {
          fileList.value = [file];
          formStateComp.value.img = file;
        }
      };

      img.onerror = () => {
        message.error("Невозможно загрузить изображение");
        fileList.value = [];
        formStateComp.value.img = null;
      };

      img.src = URL.createObjectURL(file.file);
    } else {
      fileList.value = newFileList;
      formStateComp.value.img = newFileList[0]?.file || null;
    }
  };

  const handleRemove = (file) => {
    if (file.status === "error") {
      message.info("Файл с ошибкой удалён.");
    } else {
      message.info("Файл удалён.");
      fileList.value = [];
      formStateComp.value.img = null;
    }
  };

  return {
    fileList,
    handleFileChange,
    handleRemove,
  };
};
