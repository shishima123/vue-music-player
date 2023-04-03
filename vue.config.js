module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-music-player/" // Thay tên repository của các bạn vào đây nhé
      : "/"
};
