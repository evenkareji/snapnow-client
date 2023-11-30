const handleImages = (e, setImage) => {
  let file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  }
};
export default handleImages;
